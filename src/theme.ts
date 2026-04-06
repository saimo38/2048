

//Základ
export const COLOR_BACKGROUND      = "#FAF8F0"; //  stránka
export const COLOR_GRID_BG         = "#BBADA0"; // pozadí mřížky
export const COLOR_CELL_EMPTY      = "#CDC1B4"; // prázdná buňka
export const COLOR_TEXT_DARK       = "#776E65"; // tmavý text 
export const COLOR_TEXT_LIGHT      = "#F9F6F2"; // světlý text 

//Primární barva (UI prvky, tlačítka, nadpis)
export const COLOR_PRIMARY         = "#F5A623"; // oranžová – logo, tlačítko
export const COLOR_PRIMARY_HOVER   = "#E0941A";

//Sekundární (skóre panel, sekundární tlačítka)
export const COLOR_SECONDARY       = "#BBADA0";
export const COLOR_SECONDARY_HOVER = "#A89890";

//Stavy
export const COLOR_SUCCESS         = "#4CAF50"; // new best atd
export const COLOR_WARNING         = "#F5A623"; // upozornění
export const COLOR_ERROR           = "#E53935"; // konec hry
export const COLOR_LOADING         = "#BBADA0"; // načítání

//Barvy dlaždic (hodnota → barva pozadí, barva textu
export const TILE_COLORS: Record<number, { bg: string; text: string }> = {
  2:    { bg: "#EEE4DA", text: COLOR_TEXT_DARK  },
  4:    { bg: "#EDE0C8", text: COLOR_TEXT_DARK  },
  8:    { bg: "#F2B179", text: COLOR_TEXT_LIGHT },
  16:   { bg: "#F59563", text: COLOR_TEXT_LIGHT },
  32:   { bg: "#F67C5F", text: COLOR_TEXT_LIGHT },
  64:   { bg: "#F65E3B", text: COLOR_TEXT_LIGHT },
  128:  { bg: "#EDCF72", text: COLOR_TEXT_LIGHT },
  256:  { bg: "#EDCC61", text: COLOR_TEXT_LIGHT },
  512:  { bg: "#EDC850", text: COLOR_TEXT_LIGHT },
  1024: { bg: "#EDC53F", text: COLOR_TEXT_LIGHT },
  2048: { bg: "#F5A623", text: COLOR_TEXT_LIGHT }, 
};

// Fallback pro hodnoty nad 2048
export const TILE_COLOR_SUPER = { bg: "#3C3A32", text: COLOR_TEXT_LIGHT };

//Poloměry
export const BORDER_RADIUS_TILE   = "6px";
export const BORDER_RADIUS_CARD   = "10px";
export const BORDER_RADIUS_BUTTON = "6px";
export const BORDER_RADIUS_MODAL  = "14px";

//Mezery (grid)
export const GRID_GAP     = "8px";  // mezera mezi dlaždicemi
export const GRID_PADDING = "8px";  // padding

// Animace 
export const ANIM_TILE_APPEAR = "120ms ease-out"; // nová dlaždice
export const ANIM_TILE_MERGE  = "150ms ease-in";  // sloučení
export const ANIM_TILE_SLIDE  = "100ms ease-out"; // pohyb

//Typografie
export const FONT_FAMILY      = "'Nunito', 'Segoe UI', sans-serif";
export const FONT_SIZE_TITLE  = "52px"; // „2048" nadpis
export const FONT_SIZE_TILE_2 = "clamp(14px, 4vw, 24px)"; // 2–64
export const FONT_SIZE_TILE_3 = "clamp(11px, 3vw, 18px)"; // 128–1024
export const FONT_SIZE_TILE_4 = "clamp(9px, 2.5vw, 14px)"; // 2048+
