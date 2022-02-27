<template>
	<div class="presentation">
		<p>
			The package.json is like the ID card of your project. It contains all the project dependencies and much more. If you don't know what the package.json file is, we highly recommend you to have a quick read on the npm documentation .
		</p>
		<img src="@/assets/img/presentation.svg" alt="Apresentação">
	</div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>