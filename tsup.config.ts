import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"], 
    outDir: "dist",          
    format: ["cjs", "esm"],  
    dts: true,               
    sourcemap: false,       
    clean: true,            
  },
  {
    entry: ["templates/index.ts"], 
    outDir: "dist/templates",      
    format: ["cjs", "esm"],     
    dts: true,            
    sourcemap: false,      
    clean: false,              
  }
]);
