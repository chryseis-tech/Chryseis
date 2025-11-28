import { useEffect } from 'react';

interface StructuredDataProps {
  data: object | object[];
}

const StructuredData = ({ data }: StructuredDataProps) => {
  useEffect(() => {
    const schemas = Array.isArray(data) ? data : [data];
    const scriptIds: string[] = [];

    schemas.forEach((schema, index) => {
      const scriptId = `structured-data-${index}-${Date.now()}`;
      scriptIds.push(scriptId);

      let script = document.getElementById(scriptId) as HTMLScriptElement;

      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(schema);
    });

    return () => {
      scriptIds.forEach((id) => {
        const script = document.getElementById(id);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, [data]);

  return null;
};

export default StructuredData;
