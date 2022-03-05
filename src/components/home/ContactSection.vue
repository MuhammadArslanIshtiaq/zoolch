<template>
  <section>
    <div class="container">
      <div class="text-center">
        <!-- heading -->
        <div class="mb-5">
          <div class="heading-primary position-relative mb-5">
            <h1 class="mb-0 fw-bold">HOW CAN WE HELP YOU?</h1>
          </div>
        </div>
        <!-- /heading -->
      </div>
      <form @submit.prevent="handleSubmit">
        <ul class="nav row gy-3">
          <li class="col-12 col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              id="firstName"
              v-model="fname"
            />
          </li>
          <li class="col-12 col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              id="lastName"
              v-model="lname"
            />
          </li>
          <li class="col-12 col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Company Name"
              id="companyName"
              v-model="cname"
            />
          </li>
          <li class="col-12 col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              id="emailId"
              v-model="email"
            />
          </li>
          <li class="col-12 col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              id="phoneNumber"
              v-model="phone"
            />
          </li>
          <li class="col-12 col-md-12">
            <textarea
              class="form-control"
              rows="8"
              placeholder="Message"
              id="message"
              v-model="message"
            ></textarea>
          </li>
          <li class="col-12 col-md-12 mt-4">
            <button type="submit" class="btn btn-lg btn-primary w-100">
              Send
            </button>
          </li>
        </ul>
      </form>
      <div>
        <p>Result</p>
        <p>Name: {{ fname }}</p>
        <p>Email: {{ email }}</p>
        <p>Massage: {{ message }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { zoolchFirestore } from "../../../firebase";
export default {
  data() {
    return {
      fname: "",
      lname: "",
      cname: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      let contactMessage = {
        fname: this.fname,
        lname: this.lname,
        cname: this.cname,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };
      zoolchFirestore.collection("contactMessages").add(contactMessage);
    },
  },
};
</script>

<style lang="scss" scoped></style>
