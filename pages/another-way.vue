<template>
  <div>
    <p>estás en otro lado</p>
    <p>Welcome</p>
    <nuxt-link :to="localePath('index')">{{ $t('home') }}</nuxt-link>
    <nuxt-link to="/">home</nuxt-link>
    <p>{{options.chart.id}}</p>
    <apexchart width="500" type="line" :options="options" :series="series"></apexchart>

  </div>
</template>

<script>

export default {
  nuxtI18n: {
    paths: {
      en: '/another-way',
      es: '/otro-lado',
      fr: '/utu-ladu'
    }
  },
  data: function() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
      sidebarBackground: 'vue',
      SidebarRoutes: [
    {
        name: 'Administradores',
        icon: 'fas fa-users text-primary',
        path: '/operator/list',
        children: [
            {
                name: 'Lista',
                icon: 'ni ni-planet text-blue',
                path: '/test',
                children: [
                    {
                        name: 'Prueba 2',
                        icon: 'ni ni-planet text-blue',
                        path: '/test',
                        children: []
                    }
                ]
            },
            {
                name: 'Editar',
                icon: 'fas fa-user text-primary',
                path: '/test',
                children: []
            }
        ]
    },
    {
        name: 'Webcams',
        icon: 'fas fa-video text-primary',
        path: '/webcams/list',
        children: []
    },
    {
        name: 'Categorías',
        icon: 'fas fa-file-alt text-primary',
        path: '/category/list',
        children: []
    },
    {
        name: 'Programas',
        icon: 'fas fa-podcast text-primary',
        path: '/programs/list',
        children: []
    },
    {
        name: 'Noticias',
        icon: 'fas fa-newspaper text-primary',
        path: '/news/list',
        children: []
    },
    {
        name: 'Configuraciones',
        icon: 'fas fa-cogs text-primary',
        path: '/setting/edit',
        children: []
    }
    ]
    }
  }
}
</script>