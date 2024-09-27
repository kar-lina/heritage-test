<template>
  <v-dialog max-width="500">
    <template #activator="{ props: activatorProps }">
      <button v-bind="activatorProps" class="agents__card">
        <v-img class="agents__img" aspect-ratio="1/1" cover :src="agent.img" />
        <div>
          <div class="agents__info">
            <h2 class="agents__title">{{ agent.name }}</h2>
            <UIRating
              :docs="agent.docs"
              :rating="{ rating: agent.rating, reviews: agent.reviews, docs: agent.docs }"
              class="agents__rating"
            />
          </div>

          <p class="agents__description">{{ agent.description }}</p>
        </div>
      </button>
    </template>
    <template #default="{ isActive }">
      <v-card title="Об агенте">
        <v-card-text>
          {{ agent.description }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text="Закрыть" @click="isActive.value = false" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script setup lang="ts">
import type { Agent } from '~/types'
defineProps<{ agent: Agent }>()
</script>
<style lang="scss">
.agents {
  &__card {
    width: 100%;
    background-color: #f5f5f5;
    padding: 16px;
    border-radius: 20px;
    text-align: left;
  }
  &__img {
    float: left;
    width: 48px;
    border-radius: 12px;
    margin-right: 12px;
  }
  &__info {
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-size: 20px;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 2px;
  }
  &__rating {
    margin-bottom: 4px;
  }
  &__description {
    line-height: 1.6;
    font-size: 15px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
@media (min-width: 768px) {
  .agents {
    &__card {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 20px;
      border-radius: 20px;
    }
    &__img {
      flex: 0 0 140px;
      width: 140px;
      border-radius: 20px;
      margin-right: 0px;
    }

    &__title {
      margin-top: 4px;
      font-size: 24px;
      line-height: 1.16666666667;
      margin-bottom: 2px;
    }
    &__rating {
      margin-bottom: 10px;
    }
    &__description {
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
