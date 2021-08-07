declare const styles: {
    menuContainer: {
        top: number;
        overflow: "hidden";
        position: "absolute";
        zIndex: number;
    };
    menu: {
        shadowColor?: import("react-native").ColorValue | undefined;
        shadowOffset?: {
            width: number;
            height: number;
        } | undefined;
        shadowOpacity?: number | undefined;
        shadowRadius?: number | undefined;
        borderRadius: number;
        position: "absolute";
        left: number;
        top: number;
        backgroundColor: string;
        minWidth: number;
        zIndex: number;
    } | {
        elevation: number;
        borderRadius: number;
        position: "absolute";
        left: number;
        top: number;
        backgroundColor: string;
        minWidth: number;
        zIndex: number;
    };
};
export default styles;
