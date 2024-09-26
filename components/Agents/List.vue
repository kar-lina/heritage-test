<template>
  <div class="agents d-flex flex-column gr-3" v-if="agents?.length">
    <AgentsCard v-for="(agent, idx) in agents" :id="idx"  :agent="agent"/>
  </div>
</template>
<script setup lang="ts">
import { api } from '~/services/constants'
import type { Agent } from '~/types'
const { data: agents } = useBaseFetch<Agent[]>(api.AGENTS)
</script>

