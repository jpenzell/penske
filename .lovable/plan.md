I’ll make this a deck-wide typography/layout pass, not a one-slide patch.

## Plan

1. **Fix slide 6/87 directly**
   - Update the Annie Duke probability table so headers like “Human Range” and “ChatGPT” use a table/chrome-sized semantic style instead of full body-size text.
   - Adjust column widths, padding, and row height so table labels do not squeeze or overlap in fullscreen/projector mode.

2. **Standardize the deck typography system**
   - Consolidate slide text into a single semantic scale: title, subtitle, body, large body, caption, kicker, chrome/table text.
   - Remove or tame the current deck-wide blanket remapping of Tailwind `text-*` utilities inside slides, because it can make compact UI/table labels unexpectedly huge.
   - Add missing semantic classes if needed, especially for tables, badges, footers, source notes, and compact labels.

3. **Apply consistency across active slides**
   - Review all 87 registered slides and convert visible slide copy away from ad-hoc `text-sm`, `text-lg`, `text-5xl`, arbitrary `text-[...]`, etc. where those are being used as slide typography.
   - Keep true UI controls/chrome compact, but make presentation text consistently readable and projector-safe.
   - Fix recurring layout issues caused by oversized text in grids, cards, tables, quote blocks, and multi-column slides.

4. **Keep the visual system cohesive**
   - Preserve the current dark theatrical keynote theme, but normalize contrast, foreground opacity, card borders, and accent usage so slides feel like one deck.
   - Avoid changing content or adding new visual ideas; this is a readability/cohesion pass.

5. **Validate in fullscreen dimensions**
   - Use a 1920×1080 Playwright audit to scan the deck for overflow/squished text indicators.
   - Visually check representative slides: title, slide 6 table, “Three Things to Borrow,” dense research/stat slides, cards/grids, and final slide.
   - Make a second pass on any slides that still overflow or look inconsistent.