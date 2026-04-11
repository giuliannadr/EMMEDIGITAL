# EMME DIGITAL — Official Portfolio 

![Emme Digital Header](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop)

> **"Creamos el nuevo estándar para quienes no piden permiso."**  
> *Minimalism in form, maximalism in impact.*

**EMME DIGITAL** es el portfolio oficial y la landing page boutique de la agencia creativa liderada por Giuliana Di Rocco. Diseñado con una fuerte influencia **editorial, de alta costura y brutalista**, este proyecto funciona como un *Statement* digital.

---

## 🖤 Estética y Dirección de Arte

El proyecto fue construido bajo la premisa de **Diseño de Autor**. No es una plantilla genérica, es un "magazine spread" interactivo.

- **Paleta de Color:** Contraste absoluto. Fondo negro (`#050505`), blanco puro (`#FFFFFF`) y el rojo vibrante insignia (`#FF0000`).
- **Tipografías:** 
  - Sans-serif para impacto brutalista.
  - Serif (Itálicas) ligeras para dar el toque de revista curada.
  - *Cedarville Cursive* para anotaciones artísticas.
- **Geometría a Medida:** El logotipo del Hero (las letras "EMME") no es una fuente tradicional, sino **trazados matemáticos vectoriales (SVG paths)** esculpidos desde cero para garantizar un *kerning* agresivo, vértices inalcanzables y una escalabilidad perfecta sin distorsiones en cualquier dispositivo.
- **Texturas:** Ruido digital suave (*grain*) y filtros SVG de tiza (*chalk texturizer*) incrustados para romper la planitud de la pantalla.

---

## ⚡ Stack Tecnológico

Este proyecto fue desarrollado bajo una arquitectura web moderna para asegurar animaciones fluidas a 60fps y un renderizado fulminante:

- **Framework Core:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) (Rápido empaquetado y HMR)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Usando utilidades arbitrarias y clases de mezcla como `mix-blend-multiply`)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) (Animaciones de scroll, transiciones de diseño `layoutId`, modal pop-overs y revelación de texto palabra por palabra).

---

## 📂 Arquitectura de Componentes

La página es una experiencia "One-Page" seccionada modularmente:

1. **`Hero.tsx`**: 
   - Pantalla dividida (Split-screen).
   - Manipulación de máscaras SVG y letras "EMME" esculpidas a medida.
2. **`BrandPresentation.tsx`** (El Manifiesto): 
   - Animación de lectura vinculada al scroll del usuario.
   - Collage de imágenes en el fondo (blending).
3. **`Services.tsx`**: 
   - Acordeón inmersivo que lista: *Community Management, Fotografía & Producción, Páginas Web*.
4. **`Projects.tsx`** (Selected Works): 
   - Grid dinámico filtrable. 
   - Abre un **Modal Editorial** majestuoso que simula una doble página de revista cuando seleccionas un proyecto.
5. **`Footer.tsx`**: 
   - Cierre agresivo. CTA masivo para mailing, ficha técnica, y botón de WhatsApp interactivo.

---

## 🚀 Instalación y Desarrollo Local

Para correr este proyecto en tu máquina local:

1. **Clonar el repositorio** (si aplica) o navegar a la carpeta raíz:
   ```bash
   cd emmedigital
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```
   *(Asegúrate de tener Node.js instalado).*

3. **Ejecutar el servidor local de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Visitar:** Abre `http://localhost:5178/` (o el puerto que asigne Vite) en tu navegador.

---

## ⚙️ Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm run dev` - Inicia el servidor local de Vite.
- `npm run build` - Compila la aplicación en un paquete de producción dentro de la carpeta `dist`.
- `npm run preview` - Previsualiza la aplicación compilada en producción localmente.

---

*Code by Antigravity_V1 // Ituzaingó, AR // 34.66° S, 58.66° W*
