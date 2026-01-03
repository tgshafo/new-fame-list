// Данные участников с аватарками (расширенные)
const members = [
    {
        id: 1,
        nickname: "SemerkIn",
        username: "@semerkIn",
        category: "Медийки",
        role: "Главная Медийка",
        description: "semerkIn - Также известен как 'Семеркин'. Появился в комьюнити ВКонтакте в 2020 году. Создатель проекта 'Правда о км'. Приобрел популярность благодаря серии интервью с известными медийными личностями.",
        avatar: "https://raw.githubusercontent.com/yourusername/avatars/main/avatar1.png",
        verified: true,
        pinned: true,
        project: "https://t.me/+xm9o_NoMxjVjNjgy",
        details: "Известен своей активной гражданской позицией и критическим взглядом на происходящее в сообществе.",
        joinDate: "2020",
        telegram: "semerkIn",
        website: "https://example.com",
        socials: {
            telegram: "@semerkIn",
            vk: "https://vk.com/semerkIn",
            twitter: "@semerkIn"
        },
        stats: {
            subscribers: 27000,
            projects: 5,
            rating: 95
        }
    },
    {
        id: 2,
        nickname: "Jemon",
        username: "@jemon",
        category: "Медийки",
        role: "Медийка",
        description: "Владелец сайта, по вопросам писать мне и тд хз сайт говно",
        avatar: "https://raw.githubusercontent.com/yourusername/avatars/main/avatar2.png",
        verified: false,
        pinned: false,
        project: "#",
        details: "Активный участник сообщества с 2021 года.",
        joinDate: "2021",
        telegram: "jemon",
        stats: {
            subscribers: 18000,
            projects: 2,
            rating: 85
        }
    },
    {
        id: 3,
        nickname: "Иснялцепи",
        username: "@isnialcepi",
        category: "Медийки",
        role: "Медийка",
        description: "Данная личность появилась в 24, набрал популярность благодаря пастам и сносам...",
        avatar: "https://raw.githubusercontent.com/yourusername/avatars/main/avatar3.png",
        verified: false,
        pinned: false,
        project: "#",
        details: "Новый, но активный участник сообщества.",
        joinDate: "2024",
        telegram: "isnialcepi",
        stats: {
            subscribers: 4000,
            projects: 1,
            rating: 70
        }
    }
    // ... остальные участники
];

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMembers();
    initSnow();
    initSettings();
    initModals();
    loadSavedSettings();
    
    // Применяем эффект переливания по умолчанию
    applyNeonFlow();
    
    // Инициализируем настройки неона
    initNeonControls();
});

// Инициализация настройки неона
function initNeonControls() {
    // Цвет неона
    const neonColorPicker = document.getElementById('neon-color-picker');
    if (neonColorPicker) {
        neonColorPicker.addEventListener('input', function(e) {
            const color = e.target.value;
            document.documentElement.style.setProperty('--neon-color', color);
            localStorage.setItem('fame_neon_color', color);
            updateNeonPreview();
        });
        
        // Восстановление сохраненного цвета
        const savedColor = localStorage.getItem('fame_neon_color');
        if (savedColor) {
            neonColorPicker.value = savedColor;
            document.documentElement.style.setProperty('--neon-color', savedColor);
        }
    }
    
    // Пресеты цветов
    document.querySelectorAll('.color-preset').forEach(preset => {
        preset.addEventListener('click', function() {
            const color = this.dataset.color;
            document.documentElement.style.setProperty('--neon-color', color);
            if (neonColorPicker) neonColorPicker.value = color;
            localStorage.setItem('fame_neon_color', color);
            updateNeonPreview();
        });
    });
    
    // Интенсивность неона
    const neonIntensitySlider = document.getElementById('neon-intensity-slider');
    const intensityValue = document.getElementById('intensity-value');
    
    if (neonIntensitySlider && intensityValue) {
        neonIntensitySlider.addEventListener('input', function(e) {
            const value = e.target.value;
            document.documentElement.style.setProperty('--neon-intensity', value);
            intensityValue.textContent = value;
            localStorage.setItem('fame_neon_intensity', value);
            updateNeonPreview();
        });
        
        // Восстановление сохраненной интенсивности
        const savedIntensity = localStorage.getItem('fame_neon_intensity');
        if (savedIntensity) {
            neonIntensitySlider.value = savedIntensity;
            document.documentElement.style.setProperty('--neon-intensity', savedIntensity);
            intensityValue.textContent = savedIntensity;
        }
    }
    
    // Размытие неона
    const neonBlurSlider = document.getElementById('neon-blur-slider');
    const blurValue = document.getElementById('blur-value');
    
    if (neonBlurSlider && blurValue) {
        neonBlurSlider.addEventListener('input', function(e) {
            const value = e.target.value;
            document.documentElement.style.setProperty('--neon-blur', value + 'px');
            blurValue.textContent = value + 'px';
            localStorage.setItem('fame_neon_blur', value);
            updateNeonPreview();
        });
        
        // Восстановление сохраненного размытия
        const savedBlur = localStorage.getItem('fame_neon_blur');
        if (savedBlur) {
            neonBlurSlider.value = savedBlur;
            document.documentElement.style.setProperty('--neon-blur', savedBlur + 'px');
            blurValue.textContent = savedBlur + 'px';
        }
    }
}

// Обновление предпросмотра неона
function updateNeonPreview() {
    const previewBox = document.querySelector('.preview-box');
    if (previewBox) {
        // Применяем текущие настройки к превью
        previewBox.style.borderColor = `var(--neon-color)`;
        previewBox.style.boxShadow = `0 0 calc(var(--neon-blur) * 1) var(--neon-color),
                                     0 0 calc(var(--neon-blur) * 2) var(--neon-color),
                                     0 0 calc(var(--neon-blur) * 3) var(--neon-color),
                                     inset 0 0 calc(var(--neon-blur) * 1) var(--neon-color)`;
    }
}

// Остальные функции остаются как были, но обновим showProfile для улучшенного отображения

// Показать профиль участника (улучшенная версия)
function showProfile(memberId) {
    const member = members.find(m => m.id == memberId);
    if (!member) return;
    
    const container = document.getElementById('profile-content');
    const hasAvatar = member.avatar && member.avatar.includes('avatar');
    const avatarUrl = hasAvatar ? member.avatar : 'https://via.placeholder.com/150/2a2a2a/888?text=' + member.nickname.charAt(0);
    
    // Копируем ссылку на профиль в Fame TG
    function copyProfileLink() {
        const link = window.location.origin + window.location.pathname + '#profile=' + member.id;
        navigator.clipboard.writeText(link).then(() => {
            alert('Ссылка на профиль скопирована в буфер обмена!');
        });
    }
    
    // Формируем ссылку для Telegram (убираем @ если есть)
    const telegramUsername = member.username.replace('@', '');
    const telegramLink = `https://t.me/${telegramUsername}`;
    
    // Создаем HTML для подробного профиля
    container.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar-large">
                <img src="${avatarUrl}" alt="${member.nickname}" onerror="this.src='https://via.placeholder.com/150/2a2a2a/888?text=Error'">
            </div>
            
            <h1 class="profile-title-large neon-text">${member.nickname}</h1>
            
            <div class="profile-username neon-text">
                <i class="fab fa-telegram"></i> ${member.username}
            </div>
            
            <div class="profile-badges">
                ${member.verified ? '<span class="badge verified">✓ Верифицирован</span>' : ''}
                ${member.pinned ? '<span class="badge pinned">📌 Закреплён</span>' : ''}
                <span class="badge">${member.category}</span>
                <span class="badge">${member.role}</span>
            </div>
            
            <div class="profile-stats">
                <div class="stat-item">
                    <div class="stat-value">${member.stats?.subscribers?.toLocaleString() || '0'}</div>
                    <div class="stat-label">Подписчиков</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${member.stats?.projects || '0'}</div>
                    <div class="stat-label">Проектов</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${member.stats?.rating || '0'}%</div>
                    <div class="stat-label">Рейтинг</div>
                </div>
            </div>
            
            <div class="profile-actions">
                <a href="${member.project}" class="action-btn" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Открыть проект
                </a>
                <a href="${telegramLink}" class="action-btn telegram" target="_blank">
                    <i class="fab fa-telegram"></i> Написать в ЛС
                </a>
                <button class="action-btn" onclick="copyProfileLink()">
                    <i class="fas fa-share"></i> Поделиться профилем
                </button>
            </div>
            
            ${member.socials ? `
            <div class="profile-social-links">
                ${member.socials.telegram ? `<a href="https://t.me/${member.socials.telegram.replace('@', '')}" class="social-link" target="_blank"><i class="fab fa-telegram"></i></a>` : ''}
                ${member.socials.vk ? `<a href="${member.socials.vk}" class="social-link" target="_blank"><i class="fab fa-vk"></i></a>` : ''}
                ${member.socials.twitter ? `<a href="https://twitter.com/${member.socials.twitter.replace('@', '')}" class="social-link" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
            </div>
            ` : ''}
        </div>
        
        <div class="profile-details-grid">
            <div class="profile-detail-card">
                <h4 class="neon-text"><i class="fas fa-info-circle"></i> Основная информация</h4>
                <div class="detail-item">
                    <div class="detail-label">Категория</div>
                    <div class="detail-value">${member.category}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Роль</div>
                    <div class="detail-value">${member.role}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">В сообществе с</div>
                    <div class="detail-value">${member.joinDate || 'Не указано'}</div>
                </div>
                ${member.website && member.website !== '#' ? `
                <div class="detail-item">
                    <div class="detail-label">Веб-сайт</div>
                    <div class="detail-value"><a href="${member.website}" target="_blank">${member.website}</a></div>
                </div>
                ` : ''}
            </div>
            
            <div class="profile-detail-card">
                <h4 class="neon-text"><i class="fas fa-file-alt"></i> Описание</h4>
                <p>${member.description}</p>
                ${member.details ? `<p><strong>Подробности:</strong> ${member.details}</p>` : ''}
            </div>
            
            <div class="profile-detail-card">
                <h4 class="neon-text"><i class="fas fa-link"></i> Контакты</h4>
                <div class="detail-item">
                    <div class="detail-label">Telegram</div>
                    <div class="detail-value">
                        <a href="${telegramLink}" target="_blank">${member.username}</a>
                    </div>
                </div>
                ${member.telegram ? `
                <div class="detail-item">
                    <div class="detail-label">Username для связи</div>
                    <div class="detail-value">${member.telegram}</div>
                </div>
                ` : ''}
                <div class="detail-item">
                    <div class="detail-label">Проект</div>
                    <div class="detail-value">
                        ${member.project !== '#' 
                            ? `<a href="${member.project}" target="_blank">${member.project}</a>` 
                            : 'Не указан'}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Применяем эффект переливания к профилю
    applyNeonFlowToProfile();
    
    // Переключаемся на секцию профиля
    switchSection('profile-details');
    
    // Прокручиваем к началу профиля
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Обновим инициализацию настроек для хакерских фонов
function initSettings() {
    // ... существующий код ...
    
    // Выбор хакерского фона
    document.querySelectorAll('.hacker-bg-option').forEach(option => {
        option.addEventListener('click', function() {
            const bgUrl = this.dataset.url;
            
            // Убираем активный класс у всех и добавляем текущему
            document.querySelectorAll('.hacker-bg-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
            
            // Применяем фон
            document.body.style.backgroundImage = `url('${bgUrl}')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed';
            document.body.style.backgroundPosition = 'center';
            
            // Сохраняем в localStorage
            localStorage.setItem('fame_background', bgUrl);
            localStorage.setItem('fame_background_type', 'hacker');
        });
    });
    
    // Загрузка фона
    const bgUpload = document.getElementById('bg-upload');
    const bgPreview = document.getElementById('bg-preview');
    
    if (bgUpload) {
        bgUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    bgPreview.innerHTML = `<img src="${e.target.result}" alt="Фон">`;
                    bgPreview.style.display = 'block';
                    
                    // Снимаем выделение с хакерских фонов
                    document.querySelectorAll('.hacker-bg-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    
                    // Сохраняем фон
                    localStorage.setItem('fame_background', e.target.result);
                    localStorage.setItem('fame_background_type', 'custom');
                    
                    // Применяем фон к body
                    document.body.style.backgroundImage = `url(${e.target.result})`;
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundAttachment = 'fixed';
                    document.body.style.backgroundPosition = 'center';
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // ... остальной код ...
}

// Обновим загрузку сохраненных настроек
function loadSavedSettings() {
    // ... существующий код ...
    
    // Фон
    const savedBg = localStorage.getItem('fame_background');
    const savedBgType = localStorage.getItem('fame_background_type');
    
    if (savedBg) {
        document.body.style.backgroundImage = `url('${savedBg}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundPosition = 'center';
        
        // Активируем соответствующий фон в настройках
        if (savedBgType === 'hacker') {
            document.querySelectorAll('.hacker-bg-option').forEach(option => {
                if (option.dataset.url === savedBg) {
                    option.classList.add('active');
                }
            });
        }
    }
    
    // ... остальной код ...
}

// Добавим функцию для обновления неона во всех элементах
function updateAllNeonElements() {
    const neonColor = getComputedStyle(document.documentElement).getPropertyValue('--neon-color').trim();
    
    // Обновляем все элементы с классом neon-element
    document.querySelectorAll('.neon-element').forEach(el => {
        el.style.borderColor = neonColor;
        el.style.boxShadow = `0 0 10px ${neonColor}`;
    });
    
    // Обновляем все элементы с классом neon-text
    document.querySelectorAll('.neon-text').forEach(el => {
        el.style.textShadow = `0 0 5px ${neonColor}`;
    });
}

// Глобальные функции
window.copyProfileLink = function() {
    const currentUrl = window.location.href.split('#')[0];
    const link = currentUrl + '#profile';
    navigator.clipboard.writeText(link).then(() => {
        alert('Ссылка на профиль скопирована в буфер обмена!');
    });
};

// Обновляем элементы неона при изменении настроек
document.getElementById('neon-color-picker')?.addEventListener('input', updateAllNeonElements);
document.querySelectorAll('.color-preset').forEach(preset => {
    preset.addEventListener('click', updateAllNeonElements);
});

// Инициализируем обновление неона при загрузке
setTimeout(updateAllNeonElements, 100);