export { default as shadow } from "../components/Shadow";
export namespace primary {
    const main: string;
}
export const mode: "dark";
export const appBackgroundColor: "rgba(17,17,17,1)";
export const background: "rgba(17,17,17,1)";
export const backgroundColor: "rgba(17,17,17,1)";
export const backgroundColorOpaque: "rgba(17,17,17,0.67)";
export const backgroundColorUltraOpaque: "rgba(17,17,17,0.05)";
export const canvas: "rgba(29,29,29, 1)";
export const canvasOpaque: "rgba(29,29,29,0.67)";
export const canvas1: "rgba(29,29,29, 1)";
export const canvas1Opaque: "rgba(29,29,29,0.67)";
export const canvas2: "rgba(39,39,39, 1)";
export const canvas2Opaque: "rgba(39,39,39,0.67)";
export const canvas3: "rgba(49,49,49, 1)";
export const canvas3Opaque: "rgba(49,49,49,0.67)";
export const borderColor: "rgba(255,255,255,0.2)";
export namespace textColor {
    const primary: string;
    const secondary: string;
    const inactive: string;
    const hint: string;
    const disabled: string;
    const faint: string;
}
export const primaryColor: "rgba(102, 2, 61, 1)";
export const primaryColorOpaque: "rgba(102, 2, 61, 0.67)";
export const primaryColorOpaqueLight: "rgba(102, 2, 61, 0.33)";
export const primaryColorOpaqueUltralight: "rgba(102, 2, 61, 0.2)";
export const primaryColorLighten: "rgba(141, 3, 84, 1)";
export const primaryColorLightenOpaque: "rgba(141, 3, 84, 1, 0.8)";
export const secondaryColor: "rgba(209,159,78,1)";
export const secondaryColorOpaque: "rgba(209,159,78,0.67)";
export const secondaryColorOpaqueLight: "rgba(209,159,78,0.33)";
export const secondaryColorOpaqueUltralight: "rgba(209,159,78,0.2)";
export const green: "#02662c";
export const borderColorHover: "rgba(102, 2, 61, 1)";
export const borderRadius: 3;
export const borderWidth: 1;
export const unit: 8;
export const gutter: 16;
export const padding: 12;
export const NAV_HEIGHT: 48;
export const AVATAR_SIZE: 40;
export const TOOLBAR_WIDTH_OPEN: 192;
export const TOOLBAR_WIDTH_CLOSED: 64;
export const TABBAR_HEIGHT: 56;
export const PROFILE_AVATAR_SIZE: 90;
export const DESKTOP_BREAKPOINT: 900;
export const FEED_WIDTH: 600;
export const FEED_WIDTH_DENSE: 420;
export const DEFAULT_AVATAR_URL: "https://art.fora.co/default-avatar.png";
export const DRAWER_WIDTH: 192;
export const CHAT_WIDTH: 192;
export const ASIDE_WIDTH: 300;
export const iconSize: 24;
export const iconPadding: 12;
export const iconColor: string;
export namespace Typography {
    namespace h1 {
        export const fontWeight: string;
        export const fontSize: number;
        export const lineHeight: number;
        export const letterSpacing: number;
        import color = textColor.primary;
        export { color };
    }
    namespace h2 {
        const fontWeight_1: string;
        export { fontWeight_1 as fontWeight };
        const fontSize_1: number;
        export { fontSize_1 as fontSize };
        const lineHeight_1: number;
        export { lineHeight_1 as lineHeight };
        const letterSpacing_1: number;
        export { letterSpacing_1 as letterSpacing };
        import color_1 = textColor.primary;
        export { color_1 as color };
    }
    namespace h3 {
        const fontWeight_2: string;
        export { fontWeight_2 as fontWeight };
        const fontSize_2: number;
        export { fontSize_2 as fontSize };
        const lineHeight_2: number;
        export { lineHeight_2 as lineHeight };
        const letterSpacing_2: number;
        export { letterSpacing_2 as letterSpacing };
        import color_2 = textColor.primary;
        export { color_2 as color };
    }
    namespace h4 {
        const fontWeight_3: string;
        export { fontWeight_3 as fontWeight };
        const fontSize_3: number;
        export { fontSize_3 as fontSize };
        const lineHeight_3: number;
        export { lineHeight_3 as lineHeight };
        const letterSpacing_3: number;
        export { letterSpacing_3 as letterSpacing };
        import color_3 = textColor.primary;
        export { color_3 as color };
    }
    namespace h5 {
        const fontWeight_4: string;
        export { fontWeight_4 as fontWeight };
        const fontSize_4: number;
        export { fontSize_4 as fontSize };
        const lineHeight_4: number;
        export { lineHeight_4 as lineHeight };
        const letterSpacing_4: number;
        export { letterSpacing_4 as letterSpacing };
        import color_4 = textColor.primary;
        export { color_4 as color };
    }
    namespace h6 {
        const fontWeight_5: string;
        export { fontWeight_5 as fontWeight };
        const fontSize_5: number;
        export { fontSize_5 as fontSize };
        const lineHeight_5: number;
        export { lineHeight_5 as lineHeight };
        const letterSpacing_5: number;
        export { letterSpacing_5 as letterSpacing };
        import color_5 = textColor.primary;
        export { color_5 as color };
    }
    namespace subtitle1 {
        const fontSize_6: number;
        export { fontSize_6 as fontSize };
        const lineHeight_6: number;
        export { lineHeight_6 as lineHeight };
        const fontWeight_6: string;
        export { fontWeight_6 as fontWeight };
        const letterSpacing_6: number;
        export { letterSpacing_6 as letterSpacing };
        import color_6 = textColor.primary;
        export { color_6 as color };
    }
    namespace subtitle2 {
        const fontSize_7: number;
        export { fontSize_7 as fontSize };
        const lineHeight_7: number;
        export { lineHeight_7 as lineHeight };
        const fontWeight_7: string;
        export { fontWeight_7 as fontWeight };
        const letterSpacing_7: number;
        export { letterSpacing_7 as letterSpacing };
        import color_7 = textColor.primary;
        export { color_7 as color };
    }
    namespace body1 {
        const fontSize_8: number;
        export { fontSize_8 as fontSize };
        const lineHeight_8: number;
        export { lineHeight_8 as lineHeight };
        const fontWeight_8: string;
        export { fontWeight_8 as fontWeight };
        const letterSpacing_8: number;
        export { letterSpacing_8 as letterSpacing };
        import color_8 = textColor.primary;
        export { color_8 as color };
    }
    namespace body2 {
        const fontSize_9: number;
        export { fontSize_9 as fontSize };
        const lineHeight_9: number;
        export { lineHeight_9 as lineHeight };
        const fontWeight_9: string;
        export { fontWeight_9 as fontWeight };
        const letterSpacing_9: number;
        export { letterSpacing_9 as letterSpacing };
        import color_9 = textColor.primary;
        export { color_9 as color };
    }
    namespace button {
        import color_10 = textColor.primary;
        export { color_10 as color };
        const fontSize_10: number;
        export { fontSize_10 as fontSize };
        const lineHeight_10: number;
        export { lineHeight_10 as lineHeight };
        const fontWeight_10: string;
        export { fontWeight_10 as fontWeight };
        const letterSpacing_10: number;
        export { letterSpacing_10 as letterSpacing };
    }
    namespace caption {
        import color_11 = textColor.secondary;
        export { color_11 as color };
        const fontSize_11: number;
        export { fontSize_11 as fontSize };
        const lineHeight_11: number;
        export { lineHeight_11 as lineHeight };
        const letterSpacing_11: number;
        export { letterSpacing_11 as letterSpacing };
    }
    namespace overline {
        import color_12 = textColor.primary;
        export { color_12 as color };
        const fontSize_12: number;
        export { fontSize_12 as fontSize };
        const fontWeight_11: string;
        export { fontWeight_11 as fontWeight };
        const lineHeight_12: number;
        export { lineHeight_12 as lineHeight };
        const letterSpacing_12: number;
        export { letterSpacing_12 as letterSpacing };
    }
}
