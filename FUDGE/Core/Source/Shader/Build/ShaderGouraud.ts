namespace FudgeCore {
/** Code generated by CompileShaders.mjs using the information in CompileShaders.json */

export abstract class ShaderGouraud extends Shader {
  public static readonly iSubclass: number = Shader.registerSubclass(ShaderGouraud);

  public static define: string[] = [
    "LIGHT",
    "CAMERA"
];

  public static getCoat(): typeof Coat { return CoatRemissive; }

  public static getVertexShaderSource(): string { 
    return this.insertDefines(shaderSources["Source/ShaderUniversal.vert"], this.define);
  }

  public static getFragmentShaderSource(): string { 
    return this.insertDefines(shaderSources["Source/ShaderUniversal.frag"], this.define);
  }

}
}