<template>
  <div class="contact-container">
    <div class="contact-box">
      <h3>Kontaktiere uns</h3>
      <form @submit.prevent="sendEmail">
        <div class="form-group">
          <div class="label-container">
            <label for="name">Name:</label>
          </div>
          <input type="text" id="name" v-model="formData.name" placeholder="Dein Name" required>
        </div>
        <div class="form-group">
          <div class="label-container">
            <label for="email">E-Mail:</label>
          </div>
          <input type="email" id="email" v-model="formData.email" placeholder="Deine E-Mail-Adresse" required>
        </div>
        <div class="form-group">
          <div class="label-container">
            <label for="message">Nachricht:</label>
          </div>
          <textarea id="message" v-model="formData.message" placeholder="Deine Nachricht" required></textarea>
        </div>
        <button type="submit">Kontaktieren</button>
      </form>
    </div>
  </div>
</template>



<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    sendEmail() {
      const { name, email, message } = this.formData;
      const subject = 'Kontaktanfrage Kino Cineflix';
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ANachricht: ${message}`;
      const mailtoLink = `mailto:lars.stalder2@bbzsogr.ch,dishan.kuganathan@bbzsogr.ch?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    }
  }
};
</script>
  
<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 120px;
}

.contact-box {
  width: 40%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

h3 {
  margin-top: 20px;
  font-weight: bolder; 
  font-size: 0px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input,
textarea {
  width: 90%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
