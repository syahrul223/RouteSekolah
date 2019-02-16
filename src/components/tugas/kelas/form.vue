<template>
    <section class="section pb-0 section-components">
        <div class="container mb-5">
            <!-- Inputs -->
            <h3 class="h4 text-success font-weight-bold mb-4">Tambah Kelas</h3>
        </div>
        <div class="py-5 bg-secondary">
            <div class="container-fluid">
                <!-- Inputs (alternative) -->
                
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-sm-6">
                        <base-input alternative
                                    placeholder="Nama Kelas">

                        </base-input>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-sm-6">
                        <base-input alternative
                                    placeholder="Jurusan">

                        </base-input>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-sm-6">
                        <base-button type="success" title="submit">Submit</base-button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
