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
      <form novalidate>
        <ul class="nav row gy-3">
          <li class="col-12 col-md-4">
            <input type="text" class="form-control" placeholder="First Name" />
          </li>
          <li class="col-12 col-md-4">
            <input type="text" class="form-control" placeholder="Last Name" />
          </li>
          <li class="col-12 col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Company Name"
            />
          </li>
          <li class="col-12 col-md-6">
            <input type="text" class="form-control" placeholder="Email" />
          </li>
          <li class="col-12 col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
            />
          </li>
          <li class="col-12 col-md-12">
            <textarea
              class="form-control"
              rows="8"
              placeholder="Message"
            ></textarea>
          </li>
          <li class="col-12 col-md-12 mt-4">
            <button type="submit" class="btn btn-lg btn-primary w-100">
              Send
            </button>
          </li>
        </ul>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>