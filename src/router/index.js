import Vue from 'vue'
import Router from 'vue-router'
import Siswa from '@/components/tugas/Siswa'
import Kelas from '@/components/tugas/Kelas'
import TambahSiswa from '@/components/tugas/siswa/form'
import TambahKelas from '@/components/tugas/kelas/form'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path : '/siswa',
            name : 'Siswa',
            component: Siswa
        },
        {
            path : '/kelas',
            name : 'Kelas',
            component: Kelas
        },
        {
            path : '/siswa/tambah',
            name : 'tambahSiswa',
            component: TambahSiswa
        },
        {
            path : '/kelas/tambah',
            name : 'tambahKelas',
            component: TambahKelas
        }
    ]
})

