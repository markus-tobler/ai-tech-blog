#!/usr/bin/env bash
# Installs the prose and link checkers (Vale, lychee) into ~/.local/bin (or $BIN_DIR).
# Used by CI and for local setup. Versions are pinned; bump them deliberately.
set -euo pipefail

VALE_VERSION="3.25.1"
LYCHEE_VERSION="0.24.2"
BIN_DIR="${BIN_DIR:-$HOME/.local/bin}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$BIN_DIR"

if ! command -v vale >/dev/null || [[ "$(vale -v)" != *"$VALE_VERSION"* ]]; then
	base="https://github.com/errata-ai/vale/releases/download/v${VALE_VERSION}"
	file="vale_${VALE_VERSION}_Linux_64-bit.tar.gz"
	curl -fsSL -o "$TMP/$file" "$base/$file"
	curl -fsSL -o "$TMP/sums.txt" "$base/vale_${VALE_VERSION}_checksums.txt"
	(cd "$TMP" && grep " $file\$" sums.txt | sha256sum -c -)
	tar -xzf "$TMP/$file" -C "$TMP" vale
	install -m 755 "$TMP/vale" "$BIN_DIR/vale"
fi

if ! command -v lychee >/dev/null || [[ "$(lychee -V)" != *"$LYCHEE_VERSION"* ]]; then
	base="https://github.com/lycheeverse/lychee/releases/download/lychee-v${LYCHEE_VERSION}"
	file="lychee-x86_64-unknown-linux-gnu.tar.gz"
	curl -fsSL -o "$TMP/$file" "$base/$file"
	curl -fsSL -o "$TMP/$file.sha256" "$base/$file.sha256"
	(cd "$TMP" && echo "$(cut -d' ' -f1 "$file.sha256")  $file" | sha256sum -c -)
	tar -xzf "$TMP/$file" -C "$TMP"
	install -m 755 "$(find "$TMP" -name lychee -type f | head -1)" "$BIN_DIR/lychee"
fi

vale -v
lychee -V
