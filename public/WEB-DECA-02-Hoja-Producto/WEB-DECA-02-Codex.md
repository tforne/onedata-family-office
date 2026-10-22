# WEB-DECA-02 — Añadir hoja de producto a web existente

Objetivo: añadir a https://www.onedata.one/solutions/deca un bloque de hoja comercial premium descargable/visualizable, sin alterar estructura actual, estilos ni contenido de otras soluciones.

1. Examina el proyecto abierto, descubre framework, ruta que implementa /solutions/deca, recursos públicos y reglas de despliegue.
2. Usa el archivo adjunto `OneData_DeCA_Hoja_Producto.webp` como imagen de vista previa de la hoja; no regenerarlo. IMPORTANTE: el QR dibujado dentro de una imagen generada podría no ser legible: validar con lector QR real. Si falla, corregir la hoja sustituyendo únicamente el QR por la imagen `deca_qr.png`, preservando zona blanca, margen y relación de aspecto; URL exacta https://www.onedata.one/solutions/deca. No publicar antes de comprobar su lectura.
3. Añade, en la página DeCA, una sección «Hoja de producto» con vista previa responsive y enlace claro «Ver hoja de producto». Preferir imagen en nueva pestaña y no crear un PDF ficticio. Mantener alt accesible, lazy loading, tamaños adaptativos y ancho máximo consistente con la web.
4. No cambiar menú, homepage ni otros productos. No incluir precios ni afirmaciones de certificación.
5. Ejecutar build/lint disponibles. Reportar archivos cambiados, prueba de enlace, capturas si posible, verificación QR y pasos de despliegue.
6. NO hacer commit, push, merge ni desplegar sin autorización explícita.

Archivos provistos: OneData_DeCA_Hoja_Producto.webp y deca_qr.png.
