export const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
export const years = Array.from({ length: 4 }, (_, i) => (i + 2020).toString());
export const versions =  ['1.0.0','1.1.0','1.2.0','1.3.0']
export const revisoes =  ['RV0','RV1','RV2','RV3','RV4']

export const formatarDDMMYYYY = (input: string | Date) =>
  new Date(input).toLocaleDateString("pt-BR", { timeZone: "UTC" });


export const fakeSendFiles = (
  file: File,
  onProgress: (pct: number) => void
): Promise<void> => {
  return new Promise((resolve, reject) => {
    let progress = 0;

    // chama onProgress inicialmente
    onProgress(progress);

    const interval = setInterval(() => {
      // aumenta de 5 a 20% de forma aleatória para parecer mais "humano"
      const step = Math.floor(Math.random() * 15) + 5;
      progress = Math.min(progress + step, 100);
      onProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);

        // 20% de chance de falhar
        const isError = Math.random() < 0.02;
        if (isError) {
          reject(new Error(`Falha ao enviar ${file.name}`));
        } else {
          resolve();
        }
      }
    }, 300); // a cada 300ms
  });
};