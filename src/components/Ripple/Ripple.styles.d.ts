export const radius: 10;
export default styles;
declare namespace styles {
    const container: {
        backgroundColor: string;
        overflow: string;
        zIndex: number;
        position: "absolute";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    };
    namespace ripple {
        export const width: number;
        export const height: number;
        export { radius as borderRadius };
        export const overflow: string;
        export const position: string;
        export const zIndex: number;
    }
}
