import "./Filters.css"

export const Filters = () => {
  return (
    <section className="filters">
      <div>
        <label htmlFor="price"> Precio</label>
        <input type="range" id="price" min="0" max="1000" />
      </div>
      <div>
        <label htmlFor="price"> Categoria</label>
        <select id="category">
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
};
