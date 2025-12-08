// Sample Data
const brides = [
    {
        id: 1,
        name: 'Ayesha Khan',
        age: 24,
        height: "5'4\"",
        location: 'Lahore',
        profession: 'Software Engineer',
        salary: '8 LPA',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop',
        caste: 'Muslim • Sunni • Punjabi',
        verified: true,
        online: true
    },
    {
        id: 2,
        name: 'Fatima Ali',
        age: 27,
        height: "5'6\"",
        location: 'Karachi',
        profession: 'Doctor',
        salary: '12 LPA',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
        caste: 'Muslim • Shia • Urdu',
        verified: true,
        online: true
    },
    {
        id: 3,
        name: 'Zara Malik',
        age: 22,
        height: "5'3\"",
        location: 'Islamabad',
        profession: 'CA Finalist',
        salary: 'Student',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
        caste: 'Muslim • Sunni • Pashtun',
        verified: true,
        online: false
    }
];

const grooms = [
    {
        id: 4,
        name: 'Ahmed Hassan',
        age: 28,
        height: "5'10\"",
        location: 'Dubai',
        profession: 'Business Owner',
        salary: '25 LPA',
        image: 'https://images.unsplash.com/photo-1507579939507-b47a9ccd91d3?w=400&h=500&fit=crop',
        caste: 'Muslim • Sunni • Arab',
        verified: true,
        online: true
    },
    {
        id: 5,
        name: 'Ali Raza',
        age: 30,
        height: "5'11\"",
        location: 'London',
        profession: 'IT Manager',
        salary: '18 LPA',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
        caste: 'Muslim • Shia • Pakistani',
        verified: true,
        online: true
    },
    {
        id: 6,
        name: 'Faisal Khan',
        age: 26,
        height: "5'9\"",
        location: 'Rawalpindi',
        profession: 'Civil Engineer',
        salary: '15 LPA',
        image: 'https://images.unsplash.com/photo-1519085360771-9852efb74ffd?w=400&h=500&fit=crop',
        caste: 'Muslim • Sunni • Punjabi',
        verified: true,
        online: false
    }
];

const stories = [
    {
        couple: 'Ali & Sana',
        image1: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=150',
        image2: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150',
        date: '💒 Married 2 Years Ago',
        text: 'Met on Umair X Nafiya, married within 6 months, blessed with a son! This platform is truly magical.',
        rating: 5
    },
    {
        couple: 'Ahmed & Mahnoor',
        image1: 'https://images.unsplash.com/photo-1505686623046-5dec49e1d62a?w=150',
        image2: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=150',
        date: '💒 Married 1 Year Ago',
        text: 'Love at first profile! The verification process gave us confidence. Worth every penny!',
        rating: 5
    },
    {
        couple: 'Hassan & Nadia',
        image1: 'https://images.unsplash.com/photo-1516680214602-cdbe9d66fad2?w=150',
        image2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        date: '💒 Married 6 Months Ago',
        text: 'From different cities, same values. UXN helped us connect in minutes. Highly recommend!',
        rating: 5
    }
];

const testimonials = [
    {
        name: 'Amina Saeed',
        date: '3 months ago',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50',
        text: 'Amazing platform! Found my soulmate here. Highly satisfied with the service.',
        rating: 5
    },
    {
        name: 'Hasan Ahmed',
        date: '2 months ago',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50',
        text: 'Best matrimonial site in Pakistan. Verified profiles and great support team.',
        rating: 5
    },
    {
        name: 'Zainab Khan',
        date: '1 month ago',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50',
        text: 'Love the simple interface and the matching algorithm. Found my perfect match!',
        rating: 5
    }
];

// Load Profiles
function loadProfiles() {
    loadBrides();
    loadGrooms();
    loadStories();
    loadTestimonials();
}

function loadBrides() {
    const bridesGrid = document.getElementById('bridesGrid');
    bridesGrid.innerHTML = brides.map(bride => createProfileCard(bride, 'bride')).join('');
}

function loadGrooms() {
    const groomsGrid = document.getElementById('groomsGrid');
    groomsGrid.innerHTML = grooms.map(groom => createProfileCard(groom, 'groom')).join('');
}

function createProfileCard(profile, type) {
    return `
        <div class="profile-card">
            <div class="profile-image">
                <img src="${profile.image}" alt="${profile.name}">
                <span class="profile-badge ${profile.online ? 'online' : ''}">
                    ${profile.online ? '🟢 Online' : 'Offline'}
                </span>
                <button class="heart-btn" onclick="toggleHeart(this)">❤️</button>
            </div>
            <div class="profile-details">
                <h3>${profile.name} ${profile.verified ? '<span class="verify-check">✓</span>' : ''}</h3>
                <div class="profile-info">
                    <span class="age-badge">${profile.age}</span>
                    <span class="height">${profile.height}</span>
                    <span class="location">📍 ${profile.location}</span>
                </div>
                <p class="profession">👨‍💼 ${profile.profession} | ${profile.salary}</p>
                <p class="caste">${profile.caste}</p>
                <div class="profile-actions">
                    <button class="btn-primary" onclick="viewProfile(${profile.id})">View Profile</button>
                    <button class="btn-secondary" onclick="sendInterest(${profile.id})">Send Interest</button>
                </div>
            </div>
        </div>
    `;
}

function loadStories() {
    const storiesGrid = document.getElementById('storiesGrid');
    storiesGrid.innerHTML = stories.map(story => `
        <div class="story-card">
            <div class="couple-photos">
                <img src="${story.image1}" alt="Couple">
                <img src="${story.image2}" alt="Couple">
            </div>
            <h3>${story.couple}</h3>
            <p class="marriage-date">${story.date}</p>
            <p class="story-text">"${story.text}"</p>
            <div class="rating">${'⭐'.repeat(story.rating)}</div>
        </div>
    `).join('');
}

function loadTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    testimonialsGrid.innerHTML = testimonials.map(test => `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <img src="${test.avatar}" alt="${test.name}" class="testimonial-avatar">
                <div>
                    <p class="testimonial-name">${test.name}</p>
                    <p class="testimonial-date">${test.date}</p>
                </div>
            </div>
            <div class="testimonial-stars">${'⭐'.repeat(test.rating)}</div>
            <p class="testimonial-text">"${test.text}"</p>
        </div>
    `).join('');
}

// Profile Actions
function toggleHeart(btn) {
    if (btn.style.background === 'rgb(255, 0, 110)') {
        btn.style.background = 'white';
        btn.style.color = 'black';
    } else {
        btn.style.background = '#ff006e';
        btn.style.color = 'white';
    }
}

function viewProfile(id) {
    alert(`Viewing profile #${id} - Full profile page coming soon!`);
}

function sendInterest(id) {
    alert(`Interest sent to profile #${id}! They will see your profile.`);
}

function searchProfiles() {
    const looking = document.getElementById('lookingFor').value;
    const age = document.getElementById('ageInput').value;
    const caste = document.getElementById('casteInput').value;
    const location = document.getElementById('locationInput').value;
    
    if (!looking) {
        alert('Please select who you\'re looking for!');
        return;
    }
    
    alert(`Searching for ${looking}: Age ${age || 'Any'}, ${caste || 'Any'} caste, ${location || 'Any'} location`);
}

function viewMore(type) {
    alert(`Loading more ${type}... Coming soon!`);
}

function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
}

function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
}

document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration successful! Check your email to verify account.');
    closeRegisterModal();
});

// Navbar Active Link
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('registerModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Load all content when page loads
document.addEventListener('DOMContentLoaded', loadProfiles);
