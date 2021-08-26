class digitalClock {
    constructor(element) {
        this.element = element
    }

    startClock() {
        this.update()

        setInterval(() => {
            this.update()
        }, 500)
    }

    update() {
        const frames = this.getTimeFrames()
        const minuteFormatting = frames.minute.toString().padStart(2, '0')
        const secondFormatting = frames.second.toString().padStart(2, '0')
        const timeFormatting = `${frames.hour}:${minuteFormatting}:${secondFormatting}`
        const dayParts = frames.dayPart ? 'AM' : 'PM'

        this.element.querySelector('.day-time').textContent = timeFormatting
        this.element.querySelector('.day-part').textContent = dayParts
    }

    getTimeFrames() {
        const now = new Date()

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            second: now.getSeconds(),
            dayPart: now.getHours() < 12
        }
    }
}

const clockElement = document.querySelector('#clock')
const clockObject = new digitalClock(clockElement)

clockObject.startClock()
