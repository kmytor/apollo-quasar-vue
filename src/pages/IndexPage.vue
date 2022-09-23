<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>

  <div class="apollo-moon">
      <div class="apollo">
        <h3>hHello 1 hello 2 hello3</h3>
        <ul v-for="character in characters.results" :key="character.id">

          <li>
            <p>
              {{ character.id }}
            </p>
          <p>
            {{ character.name }}
          </p>
          <i>
            <img :src="character.image">
          </i>
        </li>
        </ul>
        <p v-for="character in characters.results" :key="character.id">
          {{ character.name }}
        </p>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default defineComponent ({
  setup () {
    const { result } = useQuery( gql`
      query {
        characters {
          results{
            id
            name
            image
          }
        }
      }
    `)

    return {
      characters: result.data
    }
  }
})

</script>

 <!--
  export default defineComponent ({
  apollo: {
    characters: gql `{
    characters{
      results{
        id
        name
        image
      }
    }
  }`
  }
})
 */

/* export default defineComponent ({
  setup () {
    const { result } = useQuery( gql`
      query characters {
          characters{
            results{
              id
              name
              image
            }
          }
        }
    `)

    watch(() => {
      console.log(result.value)
    })
  },
}); */


/* export default defineComponent({
  setup () {

      const { result, loading, error } = useQuery(gql`
        query characters {
          characters{
            results{
              id
              name
              image
            }
          }
        }
      `)

      return { result, loading, error }
    }

}) */

/* import gql from 'graphql-tag';

export default{

  apollo: {
    characters: gql `{
    characters{
      results{
        id
        name
        image
      }
    }
  }`
  }

}  -->

