class Color{
    constructor(r,g,b,o=1){
        this.red = r;
        this.green = g;
        this.blue = b;
        this.opacity = o;
    }
    getColorString(){
        return "rgba("+this.red+","+this.green+","+this.blue+","+this.opacity+")";
    }
    setColorHex(hex){
        let rgb = Color.hexToRgb(hex);
        this.red = rgb.r;
        this.green = rgb.g;
        this.blue = rgb.b;
    }
    getColorHex(){
        return Color.rgbToHex(this.red, this.green, this.blue);
    }
    static rgbToHex(r, g, b) {
        return "#" + Color.componentToHex(r) + Color.componentToHex(g) + Color.componentToHex(b);
    }
    static componentToHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    static hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    static hexToRgba(hex, alpha){
        let result = this.hexToRgb(hex);
        return new Color(result.r, result.g, result.b, alpha);
    }
}