import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

export default function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return state.form;
    });

    const handleCostChange = (event) => {
        dispatch(changeCost(parseInt(event.target.value) || 0));
    };
    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }));

    }
    return (
        <div className="car-form">
            <h4 className="subtitle it-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className='label'>Name</label>
                        <input
                            type="text"
                            className="input is-expended"
                            value={name}
                            onChange={handleNameChange} />
                    </div>
                    <div className="field">
                        <label className='label'>Cost</label>
                        <input
                            className="input is-expended"
                            value={cost}
                            type='number'
                            onChange={handleCostChange} />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link"
                    >Submit</button>

                </div>
            </form>
        </div>
    )
}
