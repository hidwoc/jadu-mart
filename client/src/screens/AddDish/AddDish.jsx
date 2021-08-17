import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDish } from "../../services/dishes";
import { handleChange } from "../../utils/helpers";
import "./AddDish.css";

const AddDish = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    inventory: 0,
    img_url: "",
  });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createDish(form);
    if (res) history.push("/shop");
  };

  return (
    <div className="add-dish">
      <header>
        <h3>Add New Dish</h3>
        <div className="header-right">
          <Link to="/shop">
            <img
              className="icon"
              src="/assets/graphics/BackArrow.png"
              alt="back arrow"
            />
            <p className="go-back">Return Without Saving</p>
          </Link>
        </div>
      </header>
      <form className="dish" id="add-dish" onSubmit={handleSubmit}>
        <div className="form-left details-left">
          <img src={form.img_url} alt="preview" />
          <input
            id="img-url"
            type="text"
            placeholder="img.jpg"
            name="img_url"
            onChange={(e) => handleChange(e, form, setForm)}
            required
          />
        </div>
        <div className="form-right details-right">
          <input
            id="name"
            className="dish-name"
            type="text"
            placeholder="NAME OF DISH"
            name="name"
            onChange={(e) => handleChange(e, form, setForm)}
            style={{ textTransform: "uppercase" }}
            required
          />
          <input
            id="description"
            className="dish-description"
            type="text"
            placeholder="Dish description"
            name="description"
            onChange={(e) => handleChange(e, form, setForm)}
          />
          <div className="num-inputs">
            <label htmlFor="price">$</label>
            <input
              id="price"
              className="dish-price"
              type="number"
              placeholder="Price"
              name="price"
              onChange={(e) => handleChange(e, form, setForm)}
              required
            />
            <label htmlFor="inventory">Inventory</label>
            <input
              id="inventory"
              type="number"
              placeholder="0"
              name="inventory"
              onChange={(e) => handleChange(e, form, setForm)}
              required
            />
          </div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddDish;
