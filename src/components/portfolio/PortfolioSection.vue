<template>
  <section>
    <div class="container">
      <div class="d-flex flex-column gap-3">
        <div class="parent">
          <div class="div1 overlay-view">
            <img
              class="d-block h-100 w-100"
              src="https://source.unsplash.com/user/tom"
              alt="..."
            />
            <span>website development system</span>
          </div>
          <div class="div2 overlay-view">
            <img
              class="d-block h-100 w-100"
              src="https://source.unsplash.com/user/john"
              alt="..."
            />
            <span>website development system</span>
          </div>
          <div class="div3 overlay-view">
            <img
              class="d-block h-100 w-100"
              src="https://source.unsplash.com/user/wsanter"
              alt="..."
            />
            <span>website development system</span>
          </div>
          <div class="div4 overlay-view">
            <img
              class="d-block h-100 w-100"
              src="https://source.unsplash.com/user/tom"
              alt="..."
            />
            <span>website development system</span>
          </div>
          <div class="div5 overlay-view">
            <img
              class="d-block h-100 w-100"
              src="https://source.unsplash.com/user/wsanter"
              alt="..."
            />
            <span>website development system</span>
          </div>
        </div>
        <div class="parent">
          <div class="div1 overlay-view">
            <img
              class="d-block h-100 w-100"
              src="https://source.unsplash.com/user/tom"
              alt="..."
            />
            <span>website development system</span>
          </div>
          <div class="div2 overlay-view">
            <img
              class="d-block h-100 w-100"
              src="https://source.unsplash.com/user/john"
              alt="..."
            />
            <span>website development system</span>
          </div>
          <div class="div3 overlay-view">
            <img
              class="d-block h-100 w-100"
              src="https://source.unsplash.com/user/wsanter"
              alt="..."
            />
            <span>website development system</span>
          </div>
          <div class="div4 overlay-view">
            <img
              class="d-block h-100 w-100"
              src="https://source.unsplash.com/user/tom"
              alt="..."
            />
            <span>website development system</span>
          </div>
          <div class="div5 overlay-view">
            <img
              class="d-block h-100 w-100"
              src="https://source.unsplash.com/user/wsanter"
              alt="..."
            />
            <span>website development system</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="text-center py-5">
        <!-- heading -->
        <div class="py-5">
          <div class="heading-primary position-relative mb-5">
            <span class="mb-0 title-bg d-none d-lg-block">CAPABILITIES</span>
            <h1 class="mb-0 fw-bold">CAPABILITIES</h1>
          </div>
          <h4 class="fw-light lh-base mb-0">
            Our team works in all major code languages and platforms to ensure
            we’re able to support your project. We’ve built everything from
            social networks to employee intranets. Our continuing education and
            variety of skillsets allow us to tackle any project. We’re licensed,
            insured, and certified at what we do so you know you’re getting a
            quality website.
          </h4>
        </div>
        <!-- /heading -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1.2rem;
  grid-row-gap: 1.2rem;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
}

.div1 {
  grid-area: 1 / 1 / 3 / 3;
}
.div2 {
  grid-area: 1 / 3 / 4 / 6;
}
.div3 {
  grid-area: 3 / 1 / 6 / 3;
}
.div4 {
  grid-area: 4 / 3 / 6 / 5;
}
.div5 {
  grid-area: 4 / 5 / 6 / 6;
}

.overlay-view {
  position: relative;
  overflow: hidden;

  &:hover {
    span {
      height: 100%;
      transition: all 0.8s ease;
      top: 0;
    }
  }

  span {
    transition: all 0.8s ease;
    top: -100%;
    display: block;
    height: 0;
    width: 100%;
    position: absolute;
    background-color: #000000a1;
    padding: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    text-transform: uppercase;
    font-weight: 400;
    font-size: 2.5vmin;
    letter-spacing: 4.04px;
    color: #ffffff;
  }
}
</style>