<template>
  <div>
    <h1>Sign up</h1>
    <br>
    <div>
      <v-form ref="form" @submit.prevent="" >
        <v-container>
          <v-row>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="name"
                label="Name"
                hide-details
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="email"
                label="E-mail"
                hide-details
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="password"
                :counter="10"
                label="Password"
                hide-details
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="company"
                :counter="10"
                label="Company"
                hide-details
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="site"
                :counter="10"
                label="Site"
                hide-details
                required
              ></v-text-field>
            </v-col>

          </v-row>
          <v-btn class="mt-2" type="submit" block>Submit</v-btn>

          <br>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script setup lang="ts">
const name = ref()
const email = ref()
const password = ref()
const company = ref()
const site = ref()
// 굳이 안만들어도 되지않나?

</script>