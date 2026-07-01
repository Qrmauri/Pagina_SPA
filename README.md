# landing-react — SPA base con componentes (INACAP)

Actividad de los criterios 3.1.1 y 3.1.2: página compuesta por componentes,
con `ServiceCard` recibiendo props.

## Estructura

```
App
 ├── Header
 ├── Hero
 ├── ServiceCard  ×3 (con props distintas)
 └── Footer
```

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173`.

## Cómo funcionan las props de ServiceCard

`ServiceCard` es un componente reutilizable que no trae contenido propio:
recibe todo por props desde `App.jsx`.

```jsx
<ServiceCard
  titulo="Programación"
  descripcion="Aprendé a crear software..."
  icono="💻"
/>
```

Dentro de `ServiceCard.jsx`, esas props se desestructuran directamente en los
parámetros de la función:

```jsx
export default function ServiceCard({ titulo, descripcion, icono }) {
  return (
    <article className="service-card">
      <div className="service-card__icono">{icono}</div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </article>
  );
}
```

Cada vez que se usa `<ServiceCard ... />` en `App.jsx` con valores distintos,
React renderiza una instancia distinta del mismo componente — así se evita
repetir el mismo bloque de HTML tres veces con textos distintos a mano.

## Ideas para extender

- Pasar el `icono` como componente de `lucide-react` en vez de emoji.
- Agregar una prop `enlace` para que cada card lleve a una página de detalle.
- Convertir el arreglo de servicios en un `.map()` sobre un array de objetos
  en vez de escribir cada `<ServiceCard />` a mano.
