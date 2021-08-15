import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDish } from "../../services/dishes";
import { handleChange } from "../../utils/helpers";

const AddDish = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    inventory: 0,
    img_url: "",
  });
  const history = useHistory()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await createDish(form)
    if (res) history.push('/shop') 
  }

  return (
    <div className="add-dish">
      <header>
        <h3>Add New Dish</h3>
        <Link to="/shop">
          <div className="go-back">Return Without Saving</div>
        </Link>
      </header>
      <form className="dish-form" id="add-dish" onSubmit={handleSubmit}>
        <div className="form-left">
          <img src={form.img_url} alt="preview" width="300"/>
          <input
            id="img-url"
            type="text"
            placeholder="img.jpg"
            name="img_url"
            onChange={(e) => handleChange(e, form, setForm)}
            required
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
            required
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
              required
            />
            Inventory:{" "}
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
