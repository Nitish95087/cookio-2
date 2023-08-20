/**
 * @license MIT
 * @copyright 2023 nitishpandit
 * @author nitishpandit <nitishmernexpet@gmail.com>
 */

"use strict";

/**
 * @param {Number} minute Cooking Time
 * @returns {String}
 */
export const getTime = minute =>{
    
    const /** {Number} */ hour = Math.floor(minute / 60);
    const /** {Number} */ day = Math.floor(hour / 24);

    const /** {Number} */ time = day || hour || minute;
    const /** {Number} */ unitIndex = [day, hour, minute].lastIndexOf(time);
    const /** {Number} */ timeUnit = ["days", "hours", "minutes"][unitIndex];

   return { time, timeUnit};
}
