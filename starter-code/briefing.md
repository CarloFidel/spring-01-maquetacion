# Sprint 1: Maquetación Bookmark Landing Page

En este ejercicio, vamos a construir una landing page para Bookmark utilizando los diseños proporcionados en la carpeta designs. El objetivo es que domines las buenas prácticas de maquetación, el diseño responsive y la accesibilidad, trabajando de forma iterativa y progresiva.

## Requerimientos de repositorio de GitHub
- Cada iteración irá desarrollada en su propia rama. Al final del proyecto la rama `main` contendrá la versión final que será la que haya que desplegar en [gh-pages](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site).
- Extrae los recursos de la carpeta (`/images`) para adaptarlo a estructura de tu proyecto. 
- Incluye un fichero de README completo que siga las [recomendaciones](https://github.com/RichardLitt/standard-readme?tab=readme-ov-file) 
- Sigue [buenas prácticas](https://gist.github.com/luismts/495d982e8c5b1a0ced4a57cf3d93cf60) de commits.

## Iteración 1: Maquetación con HTML y CSS

En esta primera fase, te centrarás en la base de todo: **HTML y CSS** puro. Es el momento de sentar las bases de una estructura robusta y un estilo limpio.

### Requerimientos de la iteración 1

1.  **HTML semántico**:
    -   Usa elementos como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` y otros elementos semánticos de HTML5 para estructurar el contenido. _No utilices semánticos si no tienes claro cual utilizar_
    -   Evita usar `<div>` para todo. Piensa en el significado del contenido que estás envolviendo. Por ejemplo, el menú de navegación debe ir dentro de `<nav>`.
    -   El logotipo principal y el nombre del sitio deben estar dentro de una etiqueta de encabezado, como `<h1>`, para que los motores de búsqueda y los lectores de pantalla entiendan su importancia.

2.  **Accesibilidad (WCAG)**:
    -   Utiliza atributos **ARIA** donde sea necesario, por ejemplo, para indicar el estado de un elemento interactivo o para describir elementos que no tienen un significado semántico claro.
    -   Asegúrate de que todos los **enlaces** y **botones** sean accesibles. Los enlaces deben tener un propósito claro.
    -   Proporciona texto alternativo (`alt`) para todas las imágenes. El texto debe ser descriptivo.
    -   Asegura que los contrastes de color cumplan con las directrices de la **WCAG** (Web Content Accessibility Guidelines). Puedes usar herramientas online para verificarlo.

3.  **Organización del CSS**:
    -   Crea una hoja de estilos principal (`style.css`).
    -   Utiliza clases descriptivas y bien nombradas (ej. `btn-primary` en lugar de `btn1`).
    -   Organiza tus selectores para que el código sea fácil de leer y mantener. Considera usar comentarios para dividir las secciones (ej. `/* Hero Section */`).

4.  **Diseño Responsive**:
    -   Usa **Flexbox** y/o **Grid** para organizar los elementos de manera fluida.
    -   Aplica el principio de "Mobile First". Comienza diseñando para la vista móvil y luego utiliza media queries para adaptar el diseño a pantallas más grandes (`@media (min-width: 768px)`).
    -   No uses `width` fijos. Usa porcentajes, `em`, `rem`, `vw` y `vh` para que el diseño se adapte.

### Tareas de Desarrollo (Checklist)

-   [ ] **Preparación del repositorio**:

    -   [ ] Clona el repositorio con las instrucciones:

    ```bash
        $ git clone https://github.com/IT-Academy-BCN/bookmark-landing-page.git```
        $ cd bookmark-landing-page
    ```

    -   [ ] Desconecta tu repositorio del repositorio de IT Academy. Utiliza el comando de git:

    ```bash
        $ git remote rm origin
    ```
    
    -   [ ] Conecta el repositorio con tu cuenta de GitHub:

    ```bash
        $ git remote add origin <URL-del-teu-repositori>
    ```
    
    -   [ ] Trabaja con la rama **`feature/vanilla-implementation`**

-   [ ] **HTML**:
    -   [ ] Estructura la página con un esqueleto semántico (`<header>`, `<main>`, `<footer>`, etc.).
    -   [ ] Crea la barra de navegación con el logotipo y los enlaces.
    -   [ ] Desarrolla la sección de la cabecera (hero section) con el título, descripción y botones.
    -   [ ] Maqueta la sección de "Features" con los tabs y su contenido.
    -   [ ] Diseña la sección "Bookmark in one click".
    -   [ ] Crea la sección "Download the extension" con los botones de descarga.
    -   [ ] Maqueta la sección de "FAQ" con los elementos colapsables.
    -   [ ] Crea el formulario de suscripción.
    -   [ ] Estructura el pie de página con los enlaces y los iconos sociales.

-   [ ] **CSS**:
    -   [ ] Restablece los estilos básicos (`box-sizing`, `margin`, `padding`) o utiliza algún fichero de reset.
    -   [ ] Define las variables de color y tipografía en `:root` para un CSS más limpio y fácil de mantener.
    -   [ ] Da estilos a la tipografía, los colores y el layout general.
    -   [ ] Implementa el diseño "Mobile First" y usa `@media` queries para las vistas de tablet y escritorio.
    -   [ ] Diseña el sistema de tabs para que se vean y funcionen correctamente.
    -   [ ] Estiliza los botones y los campos de formulario.
    -   [ ] Asegúrate de que los íconos sociales se muestren correctamente.

### Tips y Consejos

-   **Planifica**: Antes de escribir una sola línea de código, mira los diseños y planifica la estructura HTML. Esto te ahorrará mucho tiempo y evitará que tengas que reestructurar todo después.
-   **Valida tu código**: Usa validadores de HTML y CSS online para detectar errores. Un código limpio es un código robusto.
-   **Usa variables**: Define las paletas de color y los tamaños de fuente en `:root` para un mantenimiento sencillo y coherente.

### Referencias

- [A Step-By-Step Process for Turning Designs Into Code](https://css-tricks.com/a-step-by-step-process-for-turning-designs-into-code/)
- [Semantic HTML5 Elements Explained](https://www.freecodecamp.org/news/semantic-html5-elements/)
- [Learn How To Make a Website](https://learnfromsteph.dev/)
- [What is Mobile First Design?](https://www.geeksforgeeks.org/mobile-first-design/)
- [CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Modern CSS Solutions for Old CSS Problems](https://moderncss.dev/)
- [Container Query Units and Fluid Typography](https://moderncss.dev/container-query-units-and-fluid-typography/)
- [Accesibility on the web](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility)
- [Resources on Accessibility - The A11Y Project](https://www.a11yproject.com/resources/)

## Iteración 2: Refactorización con SASS

Ahora que tienes la base funcionando, es hora de mejorar tu flujo de trabajo y la organización de tu CSS. En esta fase, refactorizarás tu código para usar **SASS (Sass-scss)**.

### Requerimientos de la iteración 2

0.  **Requerimientos Git**
    - Trabaja en una nueva rama: **`feature/sass-implementation`**

1.  **Estructura de ficheros SASS**:
    -   Crea un directorio `scss`.
    -   Divide tu código CSS en parciales (`_variables.scss`, `_mixins.scss`, `_layout.scss`, `_components.scss`, etc.) y luego impórtalos en un archivo principal `main.scss`.

2.  **Uso de funcionalidades SASS**:
    -   Utiliza **variables** para los colores, fuentes y espaciados.
    -   Aprovecha los **mixins** para agrupar estilos reutilizables, como los estilos para botones.
    -   Anida los selectores con sensatez. No anides más de 3 niveles de profundidad para evitar un CSS difícil de leer y con alta especificidad.



### Tips y Consejos

-   **Modulariza**: Piensa en tu CSS como bloques de construcción. Cada componente (un botón, una tarjeta, la barra de navegación) debería tener su propio parcial.
-   **No anides en exceso**: Aunque SASS te permite anidar, es una mala práctica abusar de ello. La legibilidad y la especificidad son clave.
-   **Mixins vs. Placeholders**: Usa `mixins` cuando necesites pasar argumentos o cuando los estilos varían. Usa `%placeholders` para agrupar estilos que se repiten sin cambios.

### Referencias
[SASS](https://sass-lang.com/)
[SASS Guidelines](https://sass-guidelin.es/)  



## Iteración 3: Refactorización con Librerías de Estilo

En esta fase final, exploraremos cómo las librerías de estilo pueden acelerar el desarrollo. Elige entre **Bootstrap** o **Tailwind CSS** para refactorizar tu diseño.

### Requerimientos de la iteración 3

0.  **Requerimientos Git**
    - Trabaja en una nueva rama: **`feature/tailwind-implementation`** ó **`feature/bootstrap-implementation`**, según tu elección.

1.  **Integración de la librería**:
    -   Instala la librería de tu elección (Bootstrap o Tailwind CSS).
    -   Configura el entorno de desarrollo para que la librería funcione correctamente.
2.  **Sustitución de estilos**:
    -   Reemplaza tus estilos CSS o SASS con las clases de la librería.
    -   **Bootstrap**: Utiliza su sistema de grid, sus clases de componentes (botones, cards, etc.) y sus utilidades.
    -   **Tailwind CSS**: Aplica las clases de utilidad para recrear el diseño. Combina clases como `flex`, `grid`, `p-4`, `text-lg`, etc.
3.  **Personalización**:
    -   Personaliza la librería para que coincida con los diseños originales, especialmente en cuanto a colores, tipografía y espaciado.
    -   En Bootstrap, puedes usar la personalización de SASS. En Tailwind, modifica el archivo de configuración (`tailwind.config.js`).

### Tips y Consejos

-   **Comprende la librería**: No copies y pegues ciegamente. Dedica tiempo a entender el sistema de grid y las clases de la librería que elijas.
-   **¿Qué librería elegir?**: Si prefieres un desarrollo más rápido con componentes prediseñados, Bootstrap es una buena opción. Si buscas un control granular y un CSS mínimo, Tailwind CSS es la elección.

## Rúbrica de Autoevaluación**

Utiliza esta rúbrica para evaluar tu trabajo. ¡Sé honesto contigo mismo!

| Criterio | Muy bien 👍 | Regular 😕 | Necesita mejorar 😥 |
| :--- | :--- | :--- | :--- |
| **Estructura HTML** | Uso consistente de HTML semántico. Atributos ARIA aplicados correctamente. | Estructura básica, pero con uso excesivo de `<div>`. Falta de atributos ARIA. | Código sin semántica clara, solo `<div>`s anidados. Sin accesibilidad. |
| **Diseño Responsive** | "Mobile First" aplicado correctamente. El diseño se adapta de forma fluida a todos los tamaños de pantalla. | El diseño se ve bien en una o dos vistas, pero falla en los puntos intermedios. | El diseño es rígido y se rompe al cambiar el tamaño. No es adaptable. |
| **Calidad del CSS** | Código limpio, modular y bien organizado. Se usan variables, mixins y una estructura lógica (en SASS). | El código funciona, pero es repetitivo y difícil de mantener. No usa variables ni mixins. | El código es un "spaghetti" de selectores y estilos. Imposible de leer. |
| **Adherencia al Diseño** | La maquetación es una réplica exacta de los diseños, incluyendo espaciado, tipografía y colores. | La maquetación se parece, pero tiene inconsistencias en el espaciado o la alineación. | El diseño es muy diferente al original. |
| **Accesibilidad** | Los elementos interactivos son accesibles. Las imágenes tienen `alt` descriptivo. El contraste de color es óptimo. | La accesibilidad es limitada. Falta texto `alt` en algunas imágenes o el contraste es bajo. | La página es inaccesible para lectores de pantalla o personas con discapacidades visuales. |
