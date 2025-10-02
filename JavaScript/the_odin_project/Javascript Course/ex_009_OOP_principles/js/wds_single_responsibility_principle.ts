import log_message from "./logger.js";

class CalorieTracker {
    max_calories
    current_calories

    constructor(max_calories: number) {
        this.max_calories = max_calories;
        this.current_calories = 0
    }

    track_calories(calorie_count: number) {
        this.current_calories += calorie_count;
        if (this.current_calories > this.max_calories)
            log_message("Max calories exceeded");
    }
}

const calorie_tracker = new CalorieTracker(2000);
calorie_tracker.track_calories(500);
calorie_tracker.track_calories(1000);
calorie_tracker.track_calories(700);
