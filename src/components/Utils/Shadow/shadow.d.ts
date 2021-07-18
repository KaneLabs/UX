export default shadow;
declare function shadow(elevation: any): {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
} | {
    elevation: any;
};
