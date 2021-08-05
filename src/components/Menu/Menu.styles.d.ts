export default styles;
declare namespace styles {
  namespace menuContainer {
    const top: number;
    const overflow: 'hidden';
    const position: 'absolute';
    const zIndex: number;
  }
  const menu:
    | {
        shadowColor: string;
        shadowOffset: {
          width: number;
          height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        borderRadius: number;
        position: 'absolute';
        left: number;
        top: number;
        backgroundColor: string;
        minWidth: number;
        zIndex: number;
      }
    | {
        elevation: any;
        borderRadius: number;
        position: 'absolute';
        left: number;
        top: number;
        backgroundColor: string;
        minWidth: number;
        zIndex: number;
      };
}
