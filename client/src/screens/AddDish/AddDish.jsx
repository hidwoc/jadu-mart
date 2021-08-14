import { useState } from "react";
import { Link } from "react-router-dom";
import { handleChange } from "../../utils/helpers";

const AddDish = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    inventory: 0,
    img_url: "",
  });

  const handleSubmit = async() => {

  }
  return (
    <div className="add-dish">
      <header>
        <h3>Add New Dish</h3>
        <Link to="/shop">
          <div className="go-back">Return Without Saving</div>
        </Link>
      </header>
      <form className="dish-form" id="add-dish">
        <div className="form-left">
          <img src={form.img_url} alt="image-preview" />
          <input
            id="img-url"
            type="text"
            placeholder="img.jpg"
            name="img_url"
            onChange={(e) => handleChange(e, form, setForm)}
          />
        </div>
        <div className="form-right">
          <input
            id="name"
            type="text"
            placeholder="NAME OF DISH"
            name="name"
            onChange={(e) => handleChange(e, form, setForm)}
            style={{ textTransform: "uppercase" }}
          />
          <input
            id="description"
            type="text"
            placeholder="Dish description"
            name="description"
            onChange={(e) => handleChange(e, form, setForm)}
          />
          <div className="num-inputs">
            $
            <input
              id="price"
              type="number"
              placeholder="Price"
              name="price"
              onChange={(e) => handleChange(e, form, setForm)}
            />
            Inventory:{" "}
            <input
              id="inventory"
              type="number"
              placeholder="0"
              name="inventory"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddDish;
