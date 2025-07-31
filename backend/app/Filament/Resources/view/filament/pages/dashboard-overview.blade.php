<x-filament::page>
    <div class="space-y-6">
        <div class="text-2xl font-bold text-gray-800">
            Selamat datang di Panel Admin Ponpes Miftahul Amanah
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <x-filament::card>
                <div class="text-sm text-gray-500">Jumlah Santri</div>
                <div class="text-2xl font-bold text-amber-600">215</div>
            </x-filament::card>

            <x-filament::card>
                <div class="text-sm text-gray-500">Jumlah Guru</div>
                <div class="text-2xl font-bold text-amber-600">23</div>
            </x-filament::card>

            <x-filament::card>
                <div class="text-sm text-gray-500">Program Aktif</div>
                <div class="text-2xl font-bold text-amber-600">8</div>
            </x-filament::card>
        </div>

        <div>
            <x-filament::card>
                <div class="text-lg font-semibold mb-2">Agenda Hari Ini</div>
                <ul class="text-sm list-disc pl-5 space-y-1">
                    <li>07.00 - Pengajian Pagi</li>
                    <li>10.00 - Kelas Tahfidz</li>
                    <li>13.30 - Kajian Kitab Kuning</li>
                </ul>
            </x-filament::card>
        </div>
    </div>
</x-filament::page>
