import React, { useState, useEffect } from 'react';
import "../Trackworkout.css";

function TrackWorkout() {
  const [workouts, setWorkouts] = useState([]);
  const [formData, setFormData] = useState({
    exerciseType: 'Cardio',
    dateTime: '',
    duration: '',
    intensity: 'Low',
    notes: ''
  });
  const [filters, setFilters] = useState({ exerciseType: 'all', intensity: 'all' });
  const [fetchError, setFetchError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);


  useEffect(() => {
    fetchWorkouts();
  }, []);

  function fetchWorkouts() {
    fetch(`https://phase-2-fitness-tracker-group-9.onrender.com/workouts`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch workouts');
        return response.json();
      })
      .then(data => {
        setWorkouts(data);
        setFetchError(null);
      })
      .catch(error => {
        console.error("Error fetching workouts:", error);
        setWorkouts([]);
        setFetchError(error.message);
      });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!formData.duration || isNaN(parseInt(formData.duration))) {
      alert("Please enter a valid duration.");
      return;
    }

    const newWorkout = {
      ...formData,
      duration: parseInt(formData.duration, 10),
      id: isEditing ? editId : workouts.length ? (Math.max(...workouts.map(w => parseInt(w.id))) + 1).toString() : '1', 
    };

    const url = isEditing ? `https://phase-2-fitness-tracker-group-9.onrender.com/workouts/${editId}` : `https://phase-2-fitness-tracker-group-9.onrender.com/workouts`;
    const method = isEditing ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWorkout),
    })
      .then(response => {
        if (!response.ok) throw new Error(`Failed to ${isEditing ? 'update' : 'add'} workout`);
        return response.json();
      })
      .then(() => {
        setWorkouts(prevWorkouts => {
          if (isEditing) {
            return prevWorkouts.map(workout => workout.id === editId ? newWorkout : workout);
          } else {
            return [...prevWorkouts, newWorkout];
          }
        });
        setFormData({
          exerciseType: 'Cardio',
          dateTime: '',
          duration: '',
          intensity: 'Low',
          notes: ''
        });
        setIsEditing(false);
        setEditId(null);
      })
      .catch(error => console.error(`Error ${isEditing ? 'updating' : 'adding'} workout:`, error));
  }

  function handleEdit(workout) {
    setFormData({
      exerciseType: workout.exerciseType,
      dateTime: workout.dateTime,
      duration: workout.duration,
      intensity: workout.intensity,
      notes: workout.notes
    });
    setIsEditing(true);
    setEditId(workout.id);
    
  }

  function handleFilterChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  }

  function handleClearFilters() {
    setFilters({ exerciseType: 'all', intensity: 'all' });
  }

  const filteredWorkouts = workouts.filter(workout => {
    const matchesExerciseType = filters.exerciseType === 'all' || workout.exerciseType === filters.exerciseType;
    const matchesIntensity = filters.intensity === 'all' || workout.intensity === filters.intensity;
    return matchesExerciseType && matchesIntensity;
  });

  function deleteWorkout(id) {
    fetch(`https://phase-2-fitness-tracker-group-9.onrender.com/workouts/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) throw new Error('Failed to delete workout');
        setWorkouts(prevWorkouts => prevWorkouts.filter(workout => workout.id !== id));
      })
      .catch(error => console.error("Error deleting workout:", error));
  }

  return (
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
  );
}

export default TrackWorkout;
