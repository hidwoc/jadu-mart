import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { editDish, deleteDish, getOneDish } from "../../services/dishes";
import { handleChange } from "../../utils/helpers";
import "./EditDish.css";

// TODO: default image

const EditDish = () => {
  const [form, setForm] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchDish = async () => {
      const res = await getOneDish(id);
      setForm(res);
    };
    fetchDish();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await editDish(id, form);
    if (res) history.push("/shop");
  };

  const handleDelete = async () => {
    const res = await deleteDish(id);
    if (res) history.push("/shop");
  };

  return (
    <div className="edit-dish">
      <header>
        <h3>Edit Dish</h3>
        <div className="edit-header-right">
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
          <button id="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </header>
      <form className="dish" id="edit-dish" onSubmit={handleSubmit}>
        <div className="form-left details-left">
          <img src={form.img_url} alt="preview" width="300" />
          <input
            id="img-url"
            type="text"
            placeholder="img.jpg"
            name="img_url"
            value={form.img_url}
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
            value={form.name}
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
            value={form.description}
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
              value={form.price}
              onChange={(e) => handleChange(e, form, setForm)}
              required
            />
            <label htmlFor="inventory">Inventory</label>
            <input
              id="inventory"
              type="number"
              placeholder="0"
              name="inventory"
              value={form.inventory}
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

export default EditDish;
