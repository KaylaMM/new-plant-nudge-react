import React from 'react';

const NewPlant = () => {
    return (
      <div className="new-plant">
        <form>
          <label className="new-plant-info">
            Plant Type:
            <input type="text" name="plant-type" />
          </label>

          <label className="new-plant-info">
            Location:
            <input type="text" name="plant-location" />
          </label>

          <label className="new-plant-info">
            Water Needed:
            <input type="text" name="plant-water" />
          </label>

          <label className="new-plant-info">
            Next Watering:
            <input type="text" name="plant-water-next" />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
}

export default NewPlant;