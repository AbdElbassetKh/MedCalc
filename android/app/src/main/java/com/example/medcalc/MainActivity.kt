package com.example.medcalc

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    override fun onStart() {
        super.onStart()
        // Code to execute when the activity is becoming visible to the user
    }

    override fun onResume() {
        super.onResume()
        // Code to execute when the activity will start interacting with the user
    }

    override fun onPause() {
        super.onPause()
        // Code to execute when the activity is not visible to the user
    }

    override fun onStop() {
        super.onStop()
        // Code to execute when the activity is no longer visible to the user
    }
}
