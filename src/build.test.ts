import { execSync } from 'child_process';
import path from 'path';

describe('TDD: Pipeline de Build', () => {
  it('deve realizar o build da aplicação com o Vite sem gerar erros', () => {
    // Define um timeout maior para esse teste especifico (30 segundos),
    // pois o build do vite pode demorar.
    jest.setTimeout(30000);
    
    expect(() => {
      // Usamos npm run build para rodar tsc && vite build
      execSync('npm run build', { 
        cwd: path.resolve(__dirname, '..'), 
        stdio: 'pipe' 
      });
    }).not.toThrow();
  });
});
