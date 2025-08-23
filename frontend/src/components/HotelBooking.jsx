import React from 'react';

const HotelBooking = () => {
  // Styles are defined as a JavaScript object
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '40px auto',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif',
    },
    headerImages: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: '20px',
      backgroundImage: `url('your-header-background-image.jpg')`, // Replace with your image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '250px',
      gap: '20px',
      position: 'relative',
      zIndex: 1,
    },
    imageBox: {
      width: '150px',
      height: '150px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transform: 'translateY(50px)',
    },
    imageBoxImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    formContent: {
      padding: '60px 40px 40px',
      textAlign: 'center',
    },
    formTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#333',
    },
    formSubtitle: {
      color: '#888',
      fontStyle: 'italic',
      marginBottom: '30px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    formRow: {
      display: 'flex',
      gap: '20px',
    },
    formGroup: {
      flex: 1,
      textAlign: 'left',
      marginBottom: '10px',
    },
    fullWidth: {
      flex: 'none',
      width: '100%',
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '1rem',
    },
    nameInputs: {
      display: 'flex',
      gap: '10px',
    },
    inputExample: {
      display: 'block',
      fontSize: '0.8rem',
      color: '#999',
      marginTop: '5px',
    },
    dateTimeInputs: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
    },
    timeInputs: {
      display: 'flex',
      gap: '5px',
      alignItems: 'center',
      flex: '0 0 auto',
    },
    dateSelectors: {
      display: 'flex',
      gap: '10px',
    },
    pickupOptions: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginTop: '10px',
    },
    pickupLabel: {
      fontWeight: 'normal',
      marginBottom: 0,
      display: 'inline-block',
    },
    submitBtn: {
      width: '100%',
      padding: '15px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      ':hover': {
        backgroundColor: '#45a049',
      },
    },
    // Media query for responsive design
    '@media (max-width: 768px)': {
      container: {
        margin: '20px',
      },
      headerImages: {
        height: '150px',
        gap: '10px',
      },
      imageBox: {
        width: '100px',
        height: '100px',
        transform: 'translateY(30px)',
      },
      formContent: {
        padding: '50px 20px 20px',
      },
      formRow: {
        flexDirection: 'column',
        gap: 0,
      },
      formGroup: {
        marginBottom: '15px',
      },
      nameInputs: {
        flexDirection: 'column',
        gap: 0,
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerImages}>
        <div style={styles.imageBox}>
          {/* Replace with your image path */}
          <img style={styles.imageBoxImage} src="https://via.placeholder.com/150" alt="Hotel room" />
        </div>
        <div style={styles.imageBox}>
          {/* Replace with your image path */}
          <img style={styles.imageBoxImage} src="https://via.placeholder.com/150" alt="Bedroom" />
        </div>
        <div style={styles.imageBox}>
          {/* Replace with your image path */}
          <img style={styles.imageBoxImage} src="https://via.placeholder.com/150" alt="Resort" />
        </div>
      </div>

      <div style={styles.formContent}>
        <h1 style={styles.formTitle}>Hotel Booking</h1>
        <p style={styles.formSubtitle}>Experience something new every moment</p>

        <form style={styles.form}>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="name">Name</label>
              <div style={styles.nameInputs}>
                <input style={styles.input} type="text" id="firstName" placeholder="First Name" />
                <input style={styles.input} type="text" id="lastName" placeholder="Last Name" />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">E-mail</label>
              <input style={styles.input} type="email" id="email" placeholder="ex: myname@example.com" />
              <span style={styles.inputExample}>example@example.com</span>
            </div>
          </div>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="roomType">Room Type</label>
              <select style={styles.input} id="roomType">
                <option value="">Please Select</option>
                {/* Add more room type options here */}
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="numGuests">Number of Guests</label>
              <input style={styles.input} type="number" id="numGuests" placeholder="e.g., 23" />
            </div>
          </div>

          <div style={{ ...styles.formRow, ...styles.fullWidth }}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Arrival Date & Time</label>
              <div style={styles.dateTimeInputs}>
                <input style={{ ...styles.input, flex: 1 }} type="date" className="date-input" defaultValue="2020-04-17" />
                <div style={styles.timeInputs}>
                  <input style={{ ...styles.input, width: '60px' }} type="time" defaultValue="03:59" />
                  <select style={{ ...styles.input, width: '60px' }}>
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div style={{ ...styles.formRow, ...styles.fullWidth }}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Departure Date</label>
              <div style={styles.dateSelectors}>
                <select style={styles.input}>
                  <option>Please select a month</option>
                </select>
                <select style={styles.input}>
                  <option>Please select a day</option>
                </select>
                <select style={styles.input}>
                  <option>Please select a year</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ ...styles.formGroup, ...styles.fullWidth }}>
            <label style={styles.label}>Free Pickup?</label>
            <div style={styles.pickupOptions}>
              <input type="radio" id="pickupYes" name="pickup" defaultChecked />
              <label style={styles.pickupLabel} htmlFor="pickupYes">Yes Please! - Pick me up on arrival</label>
              <input type="radio" id="pickupNo" name="pickup" />
              <label style={styles.pickupLabel} htmlFor="pickupNo">No Thanks - I'll make my own way there</label>
            </div>
          </div>

          <div style={{ ...styles.formGroup, ...styles.fullWidth }}>
            <label style={styles.label} htmlFor="specialRequests">Special Requests</label>
            <textarea style={{ ...styles.input, resize: 'vertical' }} id="specialRequests" rows="5"></textarea>
          </div>

          <button type="submit" style={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HotelBooking;