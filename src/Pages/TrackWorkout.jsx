import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function TrackWorkout(){
    return(
        <div className="App">
      <section className="trackworkout-form">
        <h2>{isEditing ? 'Edit Your Workout' : 'Track Your Workout'}</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Type of Exercise:</label>
          <select name="exerciseType" value={formData.exerciseType} onChange={handleInputChange} required>
            <option value="Cardio">Cardio</option>
            <option value="Strength">Strength</option>
            <option value="Flexibility">Flexibility</option>
            <option value="Endurance">Endurance</option>
          </select>

          <label>Date and Time:</label>
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleInputChange}
            required
          />

          <label>Duration (minutes):</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            placeholder="Duration in minutes"
            required
          />

          <label>Intensity:</label>
          <select name="intensity" value={formData.intensity} onChange={handleInputChange} required>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <label>Notes or Comments:</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Any additional notes..."
            rows="4"
          ></textarea>

          <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
        </form>
      </section>

      <section className="progress-section">
        <h2>Your Progress</h2>
        {fetchError && <p className="error">Error: {fetchError}</p>}
        <div className="filter">
          <label>Exercise Type:</label>
          <select name="exerciseType" value={filters.exerciseType} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="Cardio">Cardio</option>
            <option value="Strength">Strength</option>
            <option value="Flexibility">Flexibility</option>
            <option value="Endurance">Endurance</option>
          </select>

          <label>Intensity:</label>
          <select name="intensity" value={filters.intensity} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <button onClick={handleClearFilters}>Clear Filters</button>
        </div>

        <div id="progress-cards-container">
          {filteredWorkouts.length === 0 ? (
            <p>No workouts found for the selected filters.</p>
          ) : (
            filteredWorkouts.map(workout => (
              <div key={workout.id} className="progress-card">
                <p><strong>Exercise:</strong> {workout.exerciseType}</p>
                <p><strong>Duration:</strong> {workout.duration} minutes</p>
                <p><strong>Intensity:</strong> {workout.intensity}</p>
                <p><strong>Notes:</strong> {workout.notes}</p>
                <p><strong>Date/Time:</strong> {new Date(workout.dateTime).toLocaleString()}</p>
                <div className="button-group">
                  <button className="edit-btn" onClick={() => handleEdit(workout)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteWorkout(workout.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
    )
}