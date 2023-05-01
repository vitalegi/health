---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/princimicio.jpg',
    name: 'Pinco Princi Puccio Micio',
    title: 'Team Leader'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/6169537',
    name: 'Giorgio Vitale',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/vitalegi' },
      { icon: 'instagram', link: 'https://www.instagram.com/giorgio.bellavita.vitale' },
      { icon: 'facebook', link: 'https://www.facebook.com/giorgio.vitale.4/' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Il nostro Team
    </template>
    <template #lead>
      <i>Health</i> è sviluppato e gestito dal nostro team di esperti, Leader di un sacco di settori.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
