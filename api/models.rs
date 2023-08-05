use chrono::DateTime;
use chrono_tz::Tz;
use serde_derive::Serialize;

#[derive(Serialize)]
pub struct User {
    pub id: u32,
    pub updated_at: DateTime<Tz>,
    pub username: String,
    pub full_name: String,
    pub avatar_url: String,
    pub win_streak_current: u8,
    pub win_streak_longest: u8,
    pub lose_streak_current: u8,
    pub lose_streak_longest: u8,
}

#[derive(Serialize)]
pub struct UsersDay {
    pub id: u32,
    pub user_id: u32,
    pub date: DateTime<Tz>,
    pub total_tasks: u8,
    pub total_tasks_completed: u8,
    pub all_tasks_completed: bool,
    pub tasks: Vec<Task>,
}

#[derive(Serialize)]
pub struct Task {
    pub id: u32,
    pub name: String,
    pub created_at: DateTime<Tz>,
    pub is_completed: bool,
    pub time_spent_in_minutes: u8,
    pub completed_at: DateTime<Tz>,
    pub notes: String,
    pub display_order: u8,
    pub user_id: u32,
    pub associated_day_id: u32,
}
