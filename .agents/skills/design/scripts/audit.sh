#!/usr/bin/env bash
# Audits portfolio UI code against DESIGN.md hard rules.
# Usage: audit.sh [path ...]   (default: components app)
# Skips components/ui (shadcn source is restyled via cva, see foundation.md).
# Exit 1 when violations are found. Warnings never fail.

set -u

paths=("$@")
[ ${#paths[@]} -eq 0 ] && paths=(components app)

files=()
while IFS= read -r f; do
  files+=("$f")
done < <(find "${paths[@]}" -type f \( -name '*.tsx' -o -name '*.ts' -o -name '*.jsx' \) \
  -not -path '*components/ui/*' -not -path '*node_modules/*' -not -name '*.d.ts' 2>/dev/null | sort)

if [ ${#files[@]} -eq 0 ]; then
  echo "audit: no .ts/.tsx files under: ${paths[*]}"
  exit 0
fi

violations=0
warnings=0
# Class-token boundary: start of string or a char that can't be part of a class name.
B='(^|[^a-zA-Z0-9_-])'
E='([^a-zA-Z0-9_-]|$)'

# check <error|warn> <rule> <hint> <include-regex> [exclude-regex]
check() {
  local severity=$1 rule=$2 hint=$3 include=$4 exclude=${5:-}
  local out
  out=$(grep -nHE -- "$include" "${files[@]}" 2>/dev/null)
  [ -n "$exclude" ] && out=$(printf '%s\n' "$out" | grep -vE -- "$exclude")
  out=$(printf '%s\n' "$out" | sed '/^$/d')
  [ -z "$out" ] && return

  local count
  count=$(printf '%s\n' "$out" | wc -l | tr -d ' ')
  if [ "$severity" = error ]; then
    violations=$((violations + count))
    printf '\n✗ [%s] %s\n' "$rule" "$hint"
  else
    warnings=$((warnings + count))
    printf '\n! [%s] %s\n' "$rule" "$hint"
  fi
  printf '%s\n' "$out" | sed -E 's/^([^:]+):([0-9]+):[[:space:]]*/  \1:\2: /' | cut -c1-180
}

palette='slate|gray|zinc|neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose'
color_utils='bg|text|border|ring|fill|stroke|from|via|to|outline|decoration|divide|accent|caret|placeholder'

check error shadow "No shadows. The system is flat (DESIGN.md Elevation)." \
  "${B}(drop-|inset-|text-)?shadow(-[a-z0-9/]+|-\[[^]]+\])?${E}" \
  "shadow-none|--shadow|shadcn"
check error gradient "No gradients." \
  "${B}bg-(linear|radial|conic|gradient)-|linear-gradient|radial-gradient|conic-gradient"
check error blur "No blur or glow effects." \
  "${B}(backdrop-)?blur(-[a-z0-9]+)?${E}"
check error raw-color "Raw color value. Use semantic tokens (bg-primary, text-body, border-border...)." \
  "#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?${E}|\[#[0-9a-fA-F]{3,8}\]|(rgb|rgba|hsl|hsla|oklch)\("
check error palette-color "Tailwind palette color. Use semantic tokens instead." \
  "${B}(${color_utils})-((${palette})-[0-9]{2,3}|stone-[0-9]{2,3}|black|white)${E}"
check error dark-variant "No dark: overrides. Put dark content inside <TuiMockup> (tokens swap automatically)." \
  "${B}dark:"
check error space-utils "No space-x/y. Use flex + gap." \
  "${B}space-[xy]-"
check error text-size "Use type-* utilities, not raw text sizes." \
  "${B}text-(xs|sm|base|lg|xl|[2-9]xl)${E}|${B}text-\[[0-9]"
check error tracking "Letter spacing is 0 for every token." \
  "${B}tracking-(tighter|tight|wide|wider|widest|\[)"
check error italic-serif "No italic and no second face. Comfortaa (font-sans) or font-mono only." \
  "${B}(italic|font-serif)${E}|font-style: *['\"]?italic"
check error radius "Radius is rounded-sm (interactive) or rounded-none (containers)." \
  "${B}rounded(-(t|r|b|l|tl|tr|br|bl|s|e|ss|se|es|ee))?(-(md|lg|xl|2xl|3xl|4xl)|-\[[^]]+\])?${E}" \
  "${B}rounded(-(t|r|b|l|tl|tr|br|bl|s|e|ss|se|es|ee))?-(sm|none|full)${E}"
check error raster-image "No raster imagery. Use type, ASCII or inline SVG." \
  "<img[ >]|from ['\"]next/image['\"]|bg-\[url\(|background-image"
check error as-child "base-ui project: use the render prop, not asChild." \
  "${B}asChild${E}"

check warn rounded-full "rounded-full is reserved for testimonial avatars." \
  "${B}rounded-full${E}" "Avatar"
check warn font-weight "Prefer type-* utilities over raw font weights." \
  "${B}font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)${E}"
check warn uppercase "DESIGN.md type is sentence case." \
  "${B}uppercase${E}"
check warn lucide "lucide icons only for functional affordances (copy, external, menu), never bullets or toggles." \
  "from ['\"]lucide-react['\"]"
check warn wide-padding "Rows stay tight (py-2 list, py-3 FAQ, px-5 py-4 testimonial). 24px+ padding inside a block?" \
  "${B}p[xy]?-(6|7|8|9|10|12)${E}" \
  "TuiMockup|<main|<footer|<header|py-12|md:py|lg:py|lg:px-20|md:p-8"
check warn line-height "Line height comes from type-* utilities." \
  "${B}leading-([a-z0-9]+|\[[^]]+\])${E}"
check warn status-color "Status colors carry status only, never CTAs." \
  "${B}bg-(destructive|warning|success)${E}"

# Page-level rules (counted across all audited files).
display=$(grep -hoE "${B}type-display-xl${E}" "${files[@]}" 2>/dev/null | wc -l | tr -d ' ')
if [ "$display" -gt 1 ]; then
  violations=$((violations + 1))
  printf '\n✗ [display-once] type-display-xl used %s times. Hero headline only.\n' "$display"
  grep -nHE "${B}type-display-xl${E}" "${files[@]}" | sed 's/^/  /'
fi

others=()
for f in "${files[@]}"; do
  case "$f" in */components/section.tsx | components/section.tsx) ;; *) others+=("$f") ;; esac
done
if [ ${#others[@]} -gt 0 ]; then
  dark=$(grep -hE "<TuiMockup|className=.*${B}dark([[:space:]\"'\`]|$)" "${others[@]}" 2>/dev/null | wc -l | tr -d ' ')
  if [ "$dark" -gt 1 ]; then
    warnings=$((warnings + 1))
    printf '\n! [dark-once] %s dark surfaces found. One hero TUI mockup per page.\n' "$dark"
    grep -nHE "<TuiMockup|className=.*${B}dark([[:space:]\"'\`]|$)" "${others[@]}" | sed 's/^/  /' | cut -c1-180
  fi
fi

printf '\naudit: %d file(s), %d violation(s), %d warning(s)\n' "${#files[@]}" "$violations" "$warnings"
[ "$violations" -eq 0 ]
