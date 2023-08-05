mod models;
use chrono::{DateTime, Utc};
use chrono_tz::Tz;
use models::User;
use vercel_runtime::{run, Body, Error, Request, Response, StatusCode};

#[tokio::main]
async fn main() -> Result<(), Error> {
    run(get_user).await
}

pub async fn get_user(_req: Request) -> Result<Response<Body>, Error> {
    let utc_now = Utc::now();
    let ny_timezone = Tz::America__New_York;
    let datetime_ny: DateTime<Tz> = utc_now.with_timezone(&ny_timezone);

    let user: User = User {
        id: 1,
        updated_at: datetime_ny,
        username: String::from("richard"),
        full_name: String::from("richard"),
        avatar_url: String::from("pic"),
        win_streak_current: 0,
        win_streak_longest: 99,
        lose_streak_current: 10,
        lose_streak_longest: 200,
    };

    let serialized_person = serde_json::to_string(&user).unwrap();

    Ok(Response::builder()
        .status(StatusCode::OK)
        .header("Content-Type", "application/json")
        .body(Body::from(serialized_person))?)
}
