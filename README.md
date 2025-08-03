# Pesantren Portal

Portal management system untuk pesantren dengan backend Laravel dan frontend React.

## 🚀 Tech Stack

- **Backend**: Laravel (PHP)
- **Frontend**: React
- **Database**: MySQL/PostgreSQL

## 📋 Prerequisites

Pastikan Anda sudah menginstall:

- PHP >= 8.1
- Composer
- Node.js >= 16.x
- npm atau yarn
- MySQL/PostgreSQL
- Git

## 🛠️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/username/pesantren-portal.git
cd pesantren-portal
```

### 2. Backend Setup (Laravel)

#### Install Dependencies
```bash
cd backend
composer install
```

#### Environment Configuration
```bash
cp .env.example .env
```

Edit file `.env` sesuai konfigurasi database Anda:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pesantren_portal
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

#### Generate Application Key
```bash
php artisan key:generate
```

#### Database Migration & Seeding
```bash
php artisan migrate
php artisan db:seed
```

#### Storage Link (untuk file uploads)
```bash
php artisan storage:link
```

### 3. Frontend Setup (React)

#### Install Dependencies
```bash
cd ../frontend
npm install
# atau
yarn install
```

#### Build untuk Production
```bash
npm run build
# atau
yarn build
```

#### Copy Build ke Backend
```bash
# Copy isi folder dist ke folder public/ui di backend
cp -r dist/* ../backend/public/ui/
```

### 4. Final Backend Setup

#### Kembali ke folder backend
```bash
cd ../backend
```

#### Start Laravel Server
```bash
php artisan serve
```

Aplikasi akan berjalan di `http://localhost:8000`

## 📁 Project Structure

```
pesantren-portal/
├── backend/                 # Laravel backend
│   ├── app/
│   ├── config/
│   ├── database/
│   ├── public/
│   │   └── ui/             # React build files (setelah copy dari dist)
│   ├── resources/
│   └── routes/
├── frontend/               # React frontend
│   ├── src/
│   ├── public/
│   ├── dist/              # Build output
│   └── package.json
└── README.md
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Contributors

- **Yaumul Majid** - *Initial work* - [@yaumulmajid](https://github.com/yaumulmajid)
- **lovable-dev[bot]** - *AI Assistant*

## 📞 Support

Jika Anda mengalami masalah atau memiliki pertanyaan, silakan buat issue di repository ini.

---

**Happy Coding! 🚀**
